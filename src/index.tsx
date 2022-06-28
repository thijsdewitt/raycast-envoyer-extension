import {ActionPanel, List, Action, LocalStorage, getPreferenceValues} from "@raycast/api";
import fetch from "node-fetch";
import {useEffect, useState} from "react";

interface Preferences {
  envoyer_api_key: string;
}

// noinspection JSUnusedGlobalSymbols
export default function Command() {
  const preferences = getPreferenceValues<Preferences>();

  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getProjects() {
      const response = await fetch("https://envoyer.io/api/projects", {
        headers: {
          Authorization: `Bearer ${preferences.envoyer_api_key}`,
    },
      });
      const data: { projects: Project[] } = (await response.json()) as { projects: Project[] };
      await LocalStorage.setItem("projects", JSON.stringify(data.projects));
      setProjects(data.projects);
      setLoading(false);
    }

    LocalStorage.getItem<string>("projects").then((projects) => {
      if (projects) {
        setProjects(JSON.parse(projects));
      }
    });
    // noinspection JSIgnoredPromiseFromCall
    getProjects();
  }, []);

  return (
    <List isLoading={loading}>
      {projects.map((project) => (
        <List.Item
          key={project.id}
          icon="command-icon.png"
          title={project.name}
          subtitle={project.last_deployment_timestamp}
          actions={<ProjectActions project={project}/>}
        />
      ))}
    </List>
  );
}

function ProjectActions({project}: { project: Project }) {
  return (
    <ActionPanel>
      <Action.Push
        title="Show Details"
        target={
          <List navigationTitle={project.name}>
            <List.Item
              title="Overview"
              icon="command-icon.png"
              actions={
                <ActionPanel>
                  <Action.OpenInBrowser url={`https://envoyer.io/projects/${project.id}`}/>
                </ActionPanel>
              }
            />
            <List.Item
              title="View Last Deployment"
              icon="command-icon.png"
              actions={
                <ActionPanel>
                  <Action.OpenInBrowser
                    url={`https://envoyer.io/projects/${project.id}/deployments/${project.last_deployment_id}`}
                  />
                </ActionPanel>
              }
            />
            <List.Item
              title="Start New Deployment"
              icon="command-icon.png"
              actions={
                <ActionPanel>
                  <Action.OpenInBrowser url={`https://envoyer.io/projects/${project.id}`} onOpen={async () => {
                    await fetch(`https://envoyer.io/api/projects/${project.id}/deployments`, {
                      method: "POST",
                      headers: {
                        Authorization: `Bearer ${getPreferenceValues().envoyer_api_key}`,
                      },
                    });
                  }}/>
                </ActionPanel>
              }
            />
          </List>
        }
      />
      <Action.OpenInBrowser url={`https://envoyer.io/projects/${project.id}`}/>
    </ActionPanel>
  );
}

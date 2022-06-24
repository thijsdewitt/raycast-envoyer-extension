//{
//       "id": 1,
//       "user_id": 1,
//       "version": 1,
//       "name": "Laravel",
//       "provider": "github",
//       "plain_repository": "laravel\/laravel",
//       "repository": "git@github.com:laravel\/laravel.git",
//       "type": "laravel-5",
//       "branch": "master",
//       "push_to_deploy": false,
//       "webhook_id": null,
//       "status": null,
//       "should_deploy_again": 0,
//       "deployment_started_at": null,
//       "deployment_finished_at": "2020-10-09T10:54:38.000000Z",
//       "last_deployment_status": "finished",
//       "daily_deploys": 89,
//       "weekly_deploys": 89,
//       "last_deployment_took": 37,
//       "retain_deployments": 4,
//       "environment_servers": [
//         4
//       ],
//       "folders": [],
//       "monitor": "http:\/\/laravel.com",
//       "new_york_status": "healthy",
//       "london_status": "healthy",
//       "singapore_status": "healthy",
//       "token": "gJw0HbKUG0Zegum6oSNuYf0OvvHWy2z47eElFMiM",
//       "created_at": "2020-09-10T13:56:28.000000Z",
//       "updated_at": "2020-10-09T11:28:37.000000Z",
//       "install_dev_dependencies": false,
//       "install_dependencies": true,
//       "quiet_composer": false,
//       "servers": [
//           {
//
//           }
//       ],
//       "has_environment": true,
//       "has_monitoring_error": false,
//       "has_missing_heartbeats": true,
//       "last_deployed_branch": "master",
//       "last_deployment_id": 57,
//       "last_deployment_author": "Dries Vints",
//       "last_deployment_avatar": "https:\/\/avatars1.githubusercontent.com\/u\/594614?v=4",
//       "last_deployment_hash": "c66546e",
//       "last_deployment_timestamp": "4 days ago"
//     }

interface Project {
  id: number;
  user_id: number;
  version: number;
  name: string;
  provider: string;
  plain_repository: string;
  repository: string;
  type: string;
  branch: string;
  push_to_deploy: boolean;
  webhook_id: number;
  status: string;
  should_deploy_again: number;
  deployment_started_at: string;
  deployment_finished_at: string;
  last_deployment_status: string;
  daily_deploys: number;
  weekly_deploys: number;
  last_deployment_took: number;
  retain_deployments: number;
  environment_servers: number[];
  folders: string[];
  monitor: string;
  new_york_status: string;
  london_status: string;
  singapore_status: string;
  token: string;
  created_at: string;
  updated_at: string;
  install_dev_dependencies: boolean;
  install_dependencies: boolean;
  quiet_composer: boolean;
  servers: Server[];
  has_environment: boolean;
  has_monitoring_error: boolean;
  has_missing_heartbeats: boolean;
  last_deployed_branch: string;
  last_deployment_id: number;
  last_deployment_author: string;
  last_deployment_avatar: string;
  last_deployment_hash: string;
  last_deployment_timestamp: string;
}

interface Server {
  id: number;
}

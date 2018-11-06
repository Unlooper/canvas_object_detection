import requireDir from 'require-dir';
requireDir('./gulp/tasks', { recurse: true });

/*
 gulp                           Call to build + serve + watch tasks
 gulp build                     Build in dev mode and run unit tests in silent mode
 gulp help                      List tasks
 gulp serve                     Run the local server in dev mode
 */

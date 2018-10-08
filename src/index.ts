
/* IMPORT */

import chalk from 'chalk';
import * as simpleGit from 'simple-git/promise';

/* PULL */

const defaultOptions = {
  remote: 'origin',
  branch: ''
};

function factory ( options? ) {

  options = Object.assign ( {}, defaultOptions, options );

  return async function pull ( config, repoPath, ctx, task ) {

    const git = simpleGit ( repoPath ),
          branch = options.branch || ( await git.branchLocal () ).current;

    task.title = `pull ${chalk.gray ( `${options.remote}/${branch}` )}`;

    const remotes = await git.getRemotes ( true ),
          remote = remotes.find ( remote => remote.name === options.remote );

    if ( !remote ) return task.skip ( `Remote "${options.remote}" not found` );

    task.output = `Pulling from "${options.remote}/${branch}"...`;

    if ( config.dry ) return task.skip ();

    const changes = ( await git.pull ( options.remote, branch ) ).summary.changes;

    task.output = `Pulled ${changes} ${changes === 1 ? 'change' : 'changes'} from "${options.remote}/${branch}"`;

  };

}

/* EXPORT */

export = Object.assign ( factory, { default: factory } );

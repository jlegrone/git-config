/* eslint-env node */

const types = [
  {
    value: 'feat',
    name: 'feat:     A new feature'
  },
  {
    value: 'fix',
    name: 'fix:      A bug fix'
  },
  {
    value: 'docs',
    name: 'docs:     Documentation only changes'
  },
  {
    value: 'style',
    name: `style:    Changes that do not affect the meaning of the code
            (white-space, formatting, missing semi-colons, etc)`
  },
  {
    value: 'refactor',
    name: 'refactor: A code change that neither fixes a bug nor adds a feature'
  },
  {
    value: 'perf',
    name: 'perf:     A code change that improves performance'
  },
  {
    value: 'test',
    name: 'test:     Adding missing tests'
  },
  {
    value: 'chore',
    name: `chore:    Changes to the build process or auxiliary tools
            and libraries such as documentation generation`
  },
  {
    value: 'revert',
    name: 'revert:   Revert to a commit'
  }
];

const scopes = [
  'aliases',
  'branches',
  'contains',
  'up',
  'start',
  'hotfix',
  'wip',
  'undo',
  'amend',
  'fixup',
  'reword',
  'edit',
  'publish',
  'unpublish',
  'pushf',
  'cleanup',
  'cb',
  'log',
  'status',
  'branch-name',
  'develop-branch',
  'upstream-or-origin',
  'main-branch'
].map(name => ({ name }));

module.exports = {
  types,
  scopes,
  scopeOverrides: {
    chore: [
      { name: 'npm' }
    ]
  },
  allowCustomScopes: true,
  allowBreakingChanges: [
    'feat',
    'fix',
    'perf',
    'refactor'
  ]
};

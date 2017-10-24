# @jlegrone/git-config

[![npm version](https://badge.fury.io/js/%40jlegrone%2Fgit-config.svg)](https://badge.fury.io/js/%40jlegrone%2Fgit-config)
[![Build Status](https://travis-ci.org/jlegrone/git-config.svg?branch=master)](https://travis-ci.org/jlegrone/git-config)
[![Known Vulnerabilities](https://snyk.io/test/github/jlegrone/git-config/badge.svg)](https://snyk.io/test/github/jlegrone/git-config)

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

### Install

```
$ npm install --global @jlegrone/git-config
```

### Uninstall

```
$ npm uninstall --global @jlegrone/git-config
```

# Usage

To view the source for each alias, see [src/jlegrone.gitconfig](src/jlegrone.gitconfig).

<hr>

#### `git aliases`

List all available git aliases.

<hr>

#### `git branches`

List all remote branches, ordered by last commit date.

<hr>

#### `git contains <commit-hash>`

List all local and remote branches containing a given commit hash.

```bash
$ git contains 27395436382cd897fd957635bd42cf78788f11b1
* feature/add-docs
  master
  remotes/origin/master
```

<hr>

#### `git up`

Rebase the current branch onto `origin/develop`.

> Caution: This command rewrites history.

> Requires a `develop` branch.

<hr>

#### `git start <feature>`

Checkout a new branch based on `origin/develop`, prefixed with `feature`.

> Requires a `develop` branch.

```bash
$ git start user-service
# now on branch feature/user-service
```

<hr>

#### `git hotfix <bug>`

Checkout a new branch based `origin/master`, prefixed with `hotfix`.

> Requires a `master` branch.

```bash
$ git hotfix missing-translations
# now on branch hotfix/missing-translations
```

<hr>

#### `git wip`

Create a "work in progress" commit with all (staged and unstaged) changes.

<hr>

#### `git undo`

Undo the latest commit. The contents of that commit will remain as staged changes.

<hr>

#### `git amend`

Amend the latest commit to include all (staged and unstaged) changes.

> Caution: This command rewrites history.

<hr>

#### `git fixup <commit-hash>`

Add staged changes to the specified commit.

> Caution: This command rewrites history, and may introduce conflicts during rebase.

```bash
$ git add .
$ git fixup 27395436382cd897fd957635bd42cf78788f11b1
```

<hr>

#### `git reword <commit-hash>`

Edit the commit message for the specified commit.

> Caution: This command rewrites history.

```bash
$ git reword 27395436382cd897fd957635bd42cf78788f11b1
```

<hr>

#### `git edit`

Perform an interactive rebase starting from the specified commit.

> Caution: This command rewrites history, and may introduce conflicts during rebase.

```bash
$ git edit 27395436382cd897fd957635bd42cf78788f11b1
```

<hr>

#### `git publish`

Push the current branch to the remote `origin`, and set it to track the upstream branch.

<hr>

#### `git unpublish`

Remove the current branch from the remote `origin`.

<hr>

#### `git pushf`

Force push to the upstream branch, but receive a warning if new commits were added to the remote since your last checkout.

For more information, see http://weiqingtoh.github.io/force-with-lease/

<hr>

#### `git cleanup`

Delete local branches that have been fully merged into `master` or `develop`.

<hr>

#### `git cb <branch-name>`

Checkout a new branch. Shorthand for `git checkout -b <branch-name>`.

```bash
$ git cb test/my-proof-of-concept
# now on branch test/my-proof-of-concept
```
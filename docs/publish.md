# Publishing the Library

The step is pretty straight forward. You will need to store the transpiled code of the most recent stable code in the [odk-form-renderer-v2-lib](https://bitbucket.org/mpowersocial/odk-form-renderer-v2-lib/src/master/).

> [odk-form-renderer-v2-lib](https://bitbucket.org/mpowersocial/odk-form-renderer-v2-lib/src/master/) is the place from where the library will be installed.

> The transpiled code is the `dist` folder generated using the command `yarn build`.

### To outline the steps:

#### Clone the master branch of [odk-form-renderer-v2-lib](https://bitbucket.org/mpowersocial/odk-form-renderer-v2-lib/src/master/).

```sh
git clone git@bitbucket.org:mpowersocial/odk-form-renderer-v2-lib.git
```


#### Remove the current `dist` folder.

```sh
rm -rf dist/
```

### Add the [odk-form-renderer-v2](https://bitbucket.org/mpowersocial/odk-form-renderer-v2/src/master/) repo.

```sh
git remote add codebase git@bitbucket.org:mpowersocial/odk-form-renderer-v2.git
```

#### Pull from the branch which has the updated code.

> Say, I have the origin `odk-form-renderer-v2` as `codebase` in `git remote`. And I want to update using the `master` branch.

```sh
git pull codebase master
```

#### Resolve any merge conflicts if any.

#### Run the command to generate `dist` folder.

```sh
yarn build
```

#### Commit and push to the master branch of the [odk-form-renderer-v2-lib](https://bitbucket.org/mpowersocial/odk-form-renderer-v2-lib/src/master/).

```sh
# commit the changes
git commit -S -m 'Update library version 0.0.9'

# push to the master branch
git push origin master
```


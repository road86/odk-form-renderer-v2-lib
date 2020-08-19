# Publishing the Library

The step is pretty straight forward. You will need to store the transpiled code of the most recent stable code in the [odk-form-renderer-v2-lib](https://bitbucket.org/mpowersocial/odk-form-renderer-v2-lib/src/master/).

> [odk-form-renderer-v2-lib](https://bitbucket.org/mpowersocial/odk-form-renderer-v2-lib/src/master/) is the place from where the library will be installed.

> The transpiled code is the `dist` folder generated using the command `yarn build`.

To outline the steps:

* Clone the master branch of [odk-form-renderer-v2-lib](https://bitbucket.org/mpowersocial/odk-form-renderer-v2-lib/src/master/).


* Remove the current `dist` folder.

* Pull from the branch which has the updated code.

* Resolve any merge conflicts if any.

* Run the command to generate `dist` folder.

* Commit and push to the master branch of the [odk-form-renderer-v2-lib](https://bitbucket.org/mpowersocial/odk-form-renderer-v2-lib/src/master/).
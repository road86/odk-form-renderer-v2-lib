# odk-form-renderer-v2
## Odk Form Renderer (Version 2)

#### The library that generates **dynamic**, **complex** `react web forms` using `json` based form definitions with **minimum** configuration.

### About

The `odk-form-renderer-v2`, also can be referred as `Odk Form Renderer (Version 2)`, is a rewrite of the [odk-form-renderer-v1](https://bitbucket.org/mpowersocial/odk-form-renderer-v1/src/master/). 

The `odk-form-renderer-v2` is meant to be used as an `NPM` library unlike `odk-form-renderer-v1`, which is a stand-alone react app. Other than this crucial difference with its predecessor, the `odk-form-render-v2` is written in `typescript` and uses `redux` store for shared data.

The repository is bootstrapped using the [`TSDX`](https://github.com/formium/tsdx) boilerplate. So the new library code can be found inside `/src` and a [Parcel-based](https://parceljs.org) playground for it can be found inside `/example`.

Since this library is solely developed by the developers for the **developers of mPower**, it is hosted in [odk-form-renderer-v2-lib](https://bitbucket.org/mpowersocial/odk-form-renderer-v2-lib/src/master/). Anyone with the right credentials and permissions are allowed to install and use the library.

### Motivation Behind Version 2

Version one provided a few challenges. To tackle those challenges in a better way, we were motivated to write this library. To name few - 

* We shifted from **stand-alone app** to **library** because forms from version one can be used only as **iframes** inside our projects. We felt it decouples the form component a bit and also limits the usage of the forms. Sometimes we are required to perform custom submit actions on submission and that becomes a challenge on version one. 

* We have also written the library in typescript than javascript for better maintenance and scalability.

* Since the use of shared data among base components are large, the top parents were getting heavy and we have started to face some side effects. To keep things persisted, we have used a redux store in this version.


## Usage

### Install

The most updated and stable library can be found in [odk-form-renderer-v2-lib](https://bitbucket.org/mpowersocial/odk-form-renderer-v2-lib/src/master/). 

>Since the repository is private, prior to installation, you are required to setup an ssh connection with the mPower bitbucket server with your computer using your account. To learn more, visit [how to setup an ssh key](https://support.atlassian.com/bitbucket-cloud/docs/set-up-an-ssh-key/).

To install with `npm`

```bash
npm install git+ssh://git@bitbucket.org:mpowersocial/odk-form-renderer-v2-lib.git --save
```

or with `yarn`

```bash
yarn add git+ssh://git@bitbucket.org:mpowersocial/odk-form-renderer-v2-lib.git
```

### Uninstall

To uninstall the library using `npm`

```bash
npm uninstall odkformrenderer
```

or with `yarn`.

```bash
yarn remove odkformrenderer
```

### Library Props

| Name | Type | Description |
|---|---| ---|
|formDefinitionJson|Object|`JSON` format form definition that is generated after `XLSX` form is uploaded to the odk server. Need to be parsed as a `JS object` before passing as a prop.|
|userInputJson|Object|The `JS object` with form field names as `keys` and form field values as `values`. Useful to set `default` values to fields. |
|handleSubmit|Method|The `method` that will be called on the `submit` button clicked. By default, the two parameters, `userInput` and `mediaList`, will be passed.<br/>The `userInput` parameter will contain the latest submission data and the `mediaList` will contain the list of files uploaded if the form on submission does not have any required fields missing or constraint violated. If there is any such errors, the `userInput` will contain "`Field Violated`".|
|csvList|Object|The `CSV` options that come separate with the excel form need to be passed through this prop as a `JS object`.|
|defaultLanguage|String| The default language key with which the form will render.|
|languageOptions|Array\<Object>|The number of language options, passed as `JS object`, that are supported by the form.|

> For a detailed example, see the `constants.tsx` and `index.tsx` file inside `\example` directory.

## Contributing

### Setup

> For contributing, we prefer `yarn` over `npm` since `yarn` is faster. So the next set of instructions or examples will be provided using the `yarn` package manager.

> You are free to use the `npm` but please consult with your current team lead or repository owner regarding the use of `npm`. If you do not intend to push the `package.json.lock` file in the repository, you may skip the consultation.

#### Clone the Repository

```bash
git clone git@bitbucket.org:mpowersocial/odk-form-renderer-v2.git
```
> `SSH` is always preferred over `HTTPS`.

#### Move to the root project directory.

```bash
cd [\root\to\project\directory\]
```
#### Install the library dependencies
```
yarn 
```
> Needs to be run in the root directory.

#### Move to the example directory present inside the root directory.

```bash
cd [\root\to\project\directory\example\]
```
#### Install the example dependencies

```bash
yarn
```

### Running Development Instance

#### Open the terminal and move to the library root directory

```bash
cd [\root\to\project\directory\]
```

#### Start the development server for library

```bash
yarn start
```

> Whenever you edit the library codebase (inside `\src` directory), it will auto build a production version based on changes. Since this is a library and there is no standalone instance, you will need to run the example concurrently to see the reflection of changes.

#### While running the first terminal, open another terminal. Move to the example directory of the library repository.

```bash
cd [\root\to\project\directory\example\]
```

#### Start the example app, using the library.

```bash
yarn start
```

> You are required to keep both the terminals running concurrently to see any immediate reflection of your changes on the codebase. <br/><br/> If you change any environment setup or package.json settings, like always, you will need to close the terminals and start the development instance again.

### Production build
 
#### Open the terminal and move to the library root directory

```bash
cd [\root\to\project\directory\]
```

#### Create a production build of the library.

```
yarn build
```

### Code Quality

For linting, we have used `tslint`. Since developers of `tslint` published they will no longer update the `tslint` and will move to shipping the `tslint` with `eslint`, one crucial contribution will be to remove the `tslint` and modify the `eslint` config, as well as resolve the `eslint` issues. <br/>

**Until then, you are advised to keep `eslint` extension in your `vscode` disabled (given you are using `vscode` and have the `eslint` extension enabled).**

### Learn More

#### To learn more about the codebase folders, visit [here](./docs/codebase.md).
#### To learn more about the redux store, visit [here](./docs/store.md).
#### To learn more about the compiler, visit [here](./docs/compiler.md).

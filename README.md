 # Data Science and Artificial Intelligence II

 Ownership, control, and access - Decentralised Web

 Crozat, Baptiste
 Sayah Karadji, Arian

 ## Resources

- [Getting started as a Solid developer](https://solidproject.org//developers/tutorials/getting-started)
- [Inrupt - Getting started](https://docs.inrupt.com/developer-tools/javascript/client-libraries/tutorial/getting-started/)
- [Kulha, R. & El Sirfy - AccessArt (GitHub repository)](https://github.com/RobbsX/AccessArt)

## About

About the project

This project investigate the usability of the [SOLID](https://solidproject.org/) specification to create a decentralised file sharing alternative.

The goal is to setup user pods and create a system that let them exchange files securely and privately while retaining total control over the data and modalities.

## Getting started

### Getting your Pod and credentials

Solid is a specification and as such, does not host any data nor credentials. To get the latter, you must register to one of the [pod providers recommended by Solid](https://solidproject.org/users/get-a-pod#get-a-pod-from-a-pod-provider), or run your own Solid server, that you can create from any regular (local or remote) server through installing a [set of libraries from Solid](https://docs.inrupt.com/developer-tools/javascript/client-libraries/tutorial/getting-started/#install-the-client-libraries).

Solid credentials consist of a WebID, which is an URL including the username (like https://id.inrupt.com/{username}), and a Pod Storage, which is a URL as well including a Pod Identifier (like https://storage.inrupt.com/{Pod Identifier}).

We choose to register at Inrupt, which is the company co-founded by Sir Tim Berners-Lee behind Solid, and provide good documentation to develop Solid-based applications. Registration is simply done through [Inrupt PodSpaces](https://docs.inrupt.com/pod-spaces/) by providing an email address, choosing a username and defining a password. Once done, 

![alt text](image.png)

*Note: We first used [iGrant](https://igrant.io/datapod.html) to create our Pods. iGrant is a Swedish intermediation infrastructure provider for data exchange and verification services recommended by Solid through their official website. The registration flow is intuitive, using a user-friendly web browser interface. One must choose a username, password, provide full name and an email address to register. Once created, the credentials can be used to access a web drive application, that displays a set of folders and files. However, iGrant provides a full graphic user interface (GUI) with functions similar to a drive. Because our goal is to create a custom app ourselves, we decided to drop it in favor of Inrupt, as recommended by Solid in their development tutorial. Bottomline: if you want to simply use pods, a provider such as iGrant should be sufficient. If you want to build an app, you should look under the hood and the[Inrupt - Getting started](https://docs.inrupt.com/developer-tools/javascript/client-libraries/tutorial/getting-started/) tutorial is a good place to start.*

### Building your application

Once you get your Pod and credential, the next step (in the developer way) is to create an application where to use them. The goal of this project is to create a simple custom file sharing application. To do this, we will follow [Inrupt tutorial](https://docs.inrupt.com/developer-tools/javascript/client-libraries/tutorial/getting-started/) to develop a Solid application in JavaScript.

#### Install dependencies

The following dependencies must be installed:
- [nodejs](https://nodejs.org/en) is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts.
- [npm](https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager) is the standard package manager for Node.js - in September 2022 is consisted of over 2.1 million packages, making it the biggest single language code repository on Earth!
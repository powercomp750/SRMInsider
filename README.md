# SRMInsider

<br>
<div align="center">
<img src="https://img.shields.io/badge/version-v1.1-green">
<img src="https://img.shields.io/badge/release-stable-gree">
<a href="https://hits.sh/github.com/powercomp750/SRMInsider/"><img alt="Hits" src="https://hits.sh/github.com/powercomp750/SRMInsider.svg?color=007ec6"/></a>
<img src="https://img.shields.io/badge/made_with-❤-red"> <a href="https://github.com/powercomp750/SRMInsider/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-Apache_2.0-red.svg"/></a>
  [![Netlify Status](https://api.netlify.com/api/v1/badges/36236930-ced1-446a-a9ca-7706c7a6e848/deploy-status)](https://app.netlify.com/sites/srminsider/deploys)

</div>
<br>

This is a working prototype/solution for solving campus navigation and other issues. Project was created for Design Thinking &amp; Methology (DTM) subject.

I choose website instead of app since websites are super easy to design, implement and is less hassle to work with. Website has only frontend part, using plain resources. There is nothing like backend, databases and pages are designed for illustration.

![[Pasted image 20241210143423.png]]

## Story behind project...

Basically we were a team of 6 members and was assigned to create something working prototype solution for our problem statement in our college we face.

We chose campus navigation since new students aka freshers don't know anything about college venues like campus buildings, hostels, offices.

This project is designed to assist them and provide an effortless navigation experience. In my team, lead members assigned me for same thing to design that solution for problem. Basically this subject is project based so internal marks are evaluated by assignments, activities and performance of project which is created.

You can personally dm me for further enquires regarding team and project design. For now let's proceed with prototype...


## Runtime / Installation

Who installs a website to use? No to test on your device, you'll need to follow my instructions:

* Clone the repository to your local machine.
  
  ```bash
  git clone https://github.com/powercomp750/DTM-campus-navigator.git
  ```
  
* Navigate to the Project Directory:
  
  ```bash
  cd DTM-campus-navigator
  ```
  
* Launch ```main.html``` to get started.

## Codebase

Entire project is coded in HTML5, CSS and plain JavaScript. External resources used are:

* Google fonts 
* Font awesome icons
* All images in <code>Images</code> folder.

This project is deployed using [Netlify](https://www.netlify.com/)
  

## Project structure

For this project following files are used having their own use cases:

* <code>main.html</code>
  
  Elegant UI with our campus buildings in background. Here only working button is <code>Campus Map</code> and ``` Login interface ```.
  

* <code>login.html</code>
  
  Simple and minilistic passwordless authentication design.
  

* <code>map.html</code>
  
  This is second major thing developed as per requirements. Basically I've utilized Google maps and created custom exact locations for each places as shown in cards.
  
* <code>404.html</code>
  
  Broken links for empty components will be handled by this page. Instead of static error pages, this is creative way to indicate user that he/she landed into something which doesn't exists. Don't take it too seriously... 😂
  

* <code>style.css</code>
  
  All style rules are written in this file. Any modifications / improvements to UI will be done here. 

* <code>runtime.js</code>
  
  Basically this one manages the functioning of popup and modal boxes that you see in <code>map.html</code>.
  
- <code>Images/</code>
  
  This folder houses all the images and background used in this project. 

## Contributions

Your contributions are welcome! If you find any issues or want to add enhancements, feel free to submit a pull request.

## License

This project is licensed under the [Apache-2.0 License](https://github.com/powercomp750/DTM-campus-navigator/blob/main/LICENSE)



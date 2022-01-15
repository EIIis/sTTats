<p align="center">
  <img src="https://user-images.githubusercontent.com/47289830/149601106-5f4cee47-0e6f-4c12-affe-a28fd9b49230.png" />
</p>

# What is sTTats?
[sTTats](https://github.com/EIIis/sTTats) is a simple web-based analytics tool for users to see certain statistics about there usage on [TikTok](https://www.tiktok.com/), in an simple layout. It requires users to upload a JSON version of there data (that they have to request directly from Tiktok).

# Dependencies
The front-end portion is written in JavaScript. The back-end is written in Python and was made in order to do all the calculations. Below are some of the libraries, and how to install them. Though with the package.json file, all of the dependencies should setup.
- [React](https://reactjs.org/): The front-end framework
- [Aphrodite](https://github.com/Khan/aphrodite#readme): A CSS framework
- [React Bootstrap](https://react-bootstrap.github.io/): A CSS library
# Installation and Setup
## Disclaimer: This setup is written for a Unix based machine and not WindowOS. This is because I don't have access to a WindowOS machine, and I know the setup for Windows is quite a bit different.
It's quite easy to get the code up and running. The main thing that you'll need to have setup before following these instructions are to:
1. Have SSH setup on your computer in order to clone the repo. Alternatively, you can just download the repositiory, but I don't know if this guide will work for you.
2. Have npm installed on your computer. This is a package manager that allows you to install and manage dependencies. You can install this by running the following command in your terminal: `npm install -g npm`.  
  
Once you have have the setup ready, in order to get this up and running, just follow this simple guide:
1. Go to the Github [repo](https://github.com/EIIis/sTTats) and click the `Code` button, select the SSH option, and copy the link. It should look something like this: `git@github.com:EIIis/sTTats.git`
2. Go to your terminal and naviage to the directory where you'd like to clone the repository. Once you're there, run the following command: `git clone git@github.com:EIIis/sTTats.git`. It could ask you for your password, so just type in your password.
3. Once you see the `LingoMate` folder, navigate to the inside ot the folder and run the following command: `npm install`. This should install all the dependecies that are needed in order to get the application working.
4. Once installed you can run the application by running the following command: `npm run start`.  
5. After that, you should be able to access the application by going to the following link: `http://localhost:3000/`.  

Once you have it downloaded, you can naviagate the site. Note though that you won't have access to anything Firebase related because the API keys are located on a `.env` file, and for obvious reasons, you won't be able to access that.
# Planned Development
- [ ] Finish front-end portion
- [ ] Finish parsing at least 5 categories
- [ ] Start and finish back-end portion
- [ ] Connect front-end to back-end, get uploading working
- [ ] Release v0.1 of the application
- [ ] Intergrate Google Analytics



# Acknowledgements
No one but myself :sunglasses:  
Just kidding, thanks to my homies who motivated me to build this!
# How to use Mac Keybindings for Visual Studio Code on Ubuntu

Written on February 28th in the year 2019.

---

For a while now (a couple years), I have been suffering through a long divorce from the Apple ecosystem. It started with my iPhone actually. The last iPhone I had was the 6. It was a great phone, but to this day I still hold that the iPhone 5s was the best mobile device apple has ever made. It is the perfect unity of power, design, and software. I started to become disgruntled with what I felt was the lack of innovation in iOS through several iterations of iPhones to come. 

Finally, back in 2017 I acquired my first android phone, and since then it's been a successful journey of separating myself from Apple's ecosystem...and latching onto Google's (oh god. i mean what was i gonna do, get a windows phone?). Irony aside, one of my crowning achievements was convincing a group of friends to migrate our group chat off of iMessage on onto Whatsapp.  

So anyway, part of my journey away from Apple was deciding that I needed to start using other operating systems as well. I hadn't used Windows in years (I came back to Windows in 2018 for the sake of gaming), so naturally the alternative was Linux. It seemed like a good idea, I was already relatively familiar with how linux operated because of the work I do. 

The last time I really used Ubuntu was back in 5th grade and I can assure you, it's come a long since then. This was my distro of choice mainly because the learning curve for it was trivial. Perhaps one day I'll become an Arch Bro, but it is not this day. I got everything set up and installed properly, but there was one problem: When I finally sat down to do some coding, none of my keybindings for VSCode worked. It was then that I realized the Ubuntu Keybindings resembled those of Windows, and I had a moment where I considered just walking away.

You see, I had been working in VSCode for Mac for several years now, and my muscle memory was attuned to what those hotkeys were. So, I decided to do what anyone adverse to too much change would do: import my OSX keybindings into VSCode for Linux. I'm happy to say it wasn't too difficult. I should say this though: I ended up remapping a ton of the Ubuntu Super hotkeys. This was fine for me, because I didn't much care for the default setup. Anyway, here are the steps I went through in order to get my Mac OSX keybindings for VSCode working on Ubuntu:

1. Open up the ubuntu keyboard shortcut settings and remap everything that was 'meta+<somekey>.' This was fairly easy to do, I just added shift to all of these. 
2. If you have VSCode for mac, open up the keybindings.json file. Doing this via the command palette will bring up both the default bindings file, and the custom keybindings file. For me, since I wanted to just replace the default linux keybindings with the default OSX keybindings, I just copied the default keybindings file.
3. Create a new json file and paste the settings into it. Either put this on github, send it to yourself, or save it on a floppy disk.
4. On your linux machine, open up VSCode, and again open up the keybindings.json file via the command palatte. 
5. Paste all of your keybindings from your saved file into the keybindings.json file in VSCode. 
6. In the keybindings.json file, do a search and replace for the 'cmd' key and swap it out for the 'meta' key. Save the file.
   
And that's pretty much it! You should now be able to use the default OSX keybindings for VSCode on Ubuntu. To save a couple of steps, I've uploaded the keybindings.json file for Ubuntu here: 
https://github.com/micahchiang/vscode-keybindings.

   
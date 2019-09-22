# website-docs

A repository containing the documentation available at the Ripple website on https://ripple.moe/doc. This is made mainly for translation purposes. Typo fixes are welcome even if you're not part of the translation team; however note that if you want to make big contributions you should probably fill in the [Translating Ripple](https://docs.google.com/forms/d/e/1FAIpQLScYgWfrqsjyI55dq2ZFIZgp5dCfmcqWP5XZTE602bqCfhAeew/viewform) form, so that we can add you to our Discord translation team.

## How to create new files

As a translator, you're not expected to understand anything about programming. We just expect you to know a bit about Markdown and HTML: enough to understand what is formatting and what is text you need to translate. Generally speaking, everything inbetween `<>` is HTML, and text sorrounded by `_*` is Markdown. Also, you should know that to make a new paragraph/line, you need to make two newlines (one won't be enough).

First of all, discuss in your language's chat what file you want to translate. You don't want to have two people working on the same file! Once you have been assigned a file to translate, go to the `en` folder, click the file you need to translate, and then raw.

![](https://u.nya.is/hbtndy.png)

You should be brought to a page with Markdown/HTML code. Select it all and copy it, or simply `Ctrl + A` followed by `Ctrl + C`. Now, from the root of the project, click on "Create new file".

![](https://u.nya.is/mpxdif.png)

First of all you should name your file properly. First, set the name: it should be `<2 letter country code>/<original name>.md`. For instance, if I am translating `irc.md` into French, I would set the title to `fr/irc.md`. If unsure on your 2 letter country code, just ask Howl on the Discord.

Then, in "Edit new file", paste the text you copied. And before getting into the translation, go to [md5sums.txt](md5sums.txt), and check what's the English md5sum for your file. Then, at the top of the file, delete `old_id`, and write: `reference_version: <md5hash>`, and translate the title. For instance:

```
---
title: "Bot"
reference_version: 2691370caa5d6c6b071a18281bd440de
---
Ripple ha dei bot che puoi contattare direttamente dal gioco...
```

Then, smash your keyboard until you get something that you understand in the language you're supposed to be translating into. Once you're satisfied with the result, check out the preview (if it looks really odd, make sure you haven't fucked up formatting somewhere, or ask Howl for help). Once you're done, commit the new file: set the commit title to, for instance, `Translate bots.md into Italian`, and you can leave the description empty. To end it all, create the pull request.

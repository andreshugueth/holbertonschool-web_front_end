# 0x03. Sass & Scss

## Resources

* [Sass Basics](https://sass-lang.com/guide)
* [Sass control directives: @if, @for, @each and @while](https://thesassway.com/sass-control-directives-if-for-each-and-while/)
* [Sass references](https://sass-lang.com/documentation/values)
* [The Sass Way](https://thesassway.com/)

## Requirements
### General
* Allowed editors: vi, vim, emacs
* All your files will be executed on Ubuntu 18.04 LTS using Sass 3.7.4 (or higher)
* All your files should end with a new line
* All your Scss files should have a comment at the beginning (i.e. syntax above)
* All your files should start by a comment describing the task
* A README.md file, at the root of the folder of the project, is mandatory
* The length of your files will be tested using wc

## More Info
**Comments for your Scss file:**
**All your Scss file must start with a comment block**
```
$ cat my_styles.scss
/* My style */
body {
    .container {
        color: #3D3D3D;
    }
}
$
```

## Install Sass/Scss on Ubuntu 18.04 LTS

```bash
$ sudo apt-get install -y ruby2.5 ruby2.5-dev
$ sudo apt-get install ubuntu-dev-tools
$ gem install sass -v 3.7.4
$ sass --version
Ruby Sass 3.7.4
```

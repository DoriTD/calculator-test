# polypoly JavaScript case study

Hi!

If you read this you are probably in talks with us to work with polypoly. To
figure out whether we would be happy working together, we created this case
study, which will give us some insights into how you work. At the time you read
this, we may not have published [our
repositories](https://github.com/polypoly-eu) as open source yet, so we will
make sure to provide you with insights into how we work as soon as we meet to
discuss your code.

You can finish the case study on your own time, and send us the results when
you're done. We are asking you to invest around two hours of your spare time
into this. We realise you are taking the risk of wasting your time here. A lot
of candidates have meaningful open source work we could look into instead, but
by far not everyone does, and we want to make a fair assessment - this is the
most time efficient way we could think of. We tried to design the problems so
that it shouldn't take you more than two hours of work in total.

## How it works

This repository contains an existing code base for a calculator web app. Below
you will find several problems to solve, which all ask you to make changes to
the existing code base.

In addition to making the changes for solving your chosen problems, **please
include a written explanation** of how you approached the problem, and why you
did it that way. Anything from additional text files to commit messages works,
as long as it's in the repository we will find it :)

## The problems

There are five problems, of which we will ask you to tackle three. To respect
your time and see what you focus on, we would ask you to finish each problem in
about _40_ minutes, which means it should take you no more than _two hours_ in
total.

Test your work in the current stable version of
[Firefox](https://www.mozilla.org/firefox) - version 85 as of
2020-02-15. Whether it works in other browsers does not matter.

### Part 1 - Improve the product

Please pick any **two** of these problems and solve them. It does not matter which
problems you pick, when in doubt go for those that you feel confident you can
finish in _40 minutes_ (per problem).

Feel free to refactor the existing code within the timebox of your problem, but
_please do not introduce any third party tools or libraries_ at this point.

#### 1. Make it more useable on desktop

1. Make it look like in the [desktop mockup](mockups/desktop.png).
2. Allow using the keyboard buttons `0`-`9`, `+`, `-`, `*`, `/`, `=` and
   _backspace_ (`C`) for the respective buttons on the calculator. Pressing one
   of those keys on the keyboard should show the buttons of the calculator as
   being pressed.

Test your work in a window size of 1024x768.

#### 2. Make it more useable on mobile

1. Make it look like in the [mobile mockup](mockups/mobile.png).
2. If you also tackled the first problem, make sure it still looks and works as
   intended on desktop. If not, you may ignore what it looks like on desktop.
3. When the user swipes the display field from right to left, it should trigger
   the behaviour of the `C` button.

Test your work in Firefox' _Responsive Design Mode_, chosing _iPhone X/XS_.

#### 3. Make it more powerful

1. Change the behaviour triggered by the `=` button: Instead of applying the
   current operation only once, pressing it again should apply the same
   operation again. Example: Press `2`, `0`, `/`, `2`, and `=`. The display should
   show `10`. Press `=` again, and it should show `5`.
2. Make it possible to enter a negative value, by pressing `-` before a
   digit. Example: Press `2`, `-`, `-`, `2` and `=`. The display should show
   `4`.

#### 4. Show the formula in the display

1. The display should not show the current value, but the entire formula
   currently being typed, until the user presses `=`.
2. The current result of what is being typed should be shown as a preview, as in
   the [mockup](mockups/formula.png).
3. If the user presses `=`, the preview should disappear and only the result of
   the calculation should be shown in the display.
4. The overall behaviour of the calculator should stay the same, i.e. pressing
   the same keys in the same order with or without this change should lead to
   the same result after hitting `=`. Example: Operations should be applied from
   left to right, the formula `2 + 10 / 2` should evalute to `6`, not `7`.

### Part 2 - Improve the code

_After_ you finish the first part, please invest _at most 40 minutes_ into
improving the quality of the code base, whatever that means to you. Do not
change how the calculator looks or reacts to user input.

You may introduce third party tools and libraries at this point - whether you do
that and how you do that is entirely up to your judgement.

## Sending us your work

We would like to inspect not just the code you've written, but also how you
worked with version control, to get a more full picture. To this end, once
you're done, please do one of the following things:

**Option 1:** Share your repository with us on any valid Git HTTP(S) URL.
Ideally without authentication, but if you want to share a private repository on
GitHub, GitLab or some other platform with us, you can still do so: Just send an
invite.

**Option 2:** Send us the repository as a `.zip`, `.tar.gz` or `.tar.bz2`
archive - either via Email or as a download link.

Thank you very much for taking the time!

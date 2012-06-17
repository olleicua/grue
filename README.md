**grue**
====

An open source MVC text adventure framework in JavaScript.

PAQ (Possibly Asked Questions)
====

**Q**. Why should I use grue?

**A**. Perhaps you have a great idea for a text adventure game but you aren't very
good at / very interested in programming.  Or perhaps you like to program but
can't figure out a simple elegant way to program a text adventure.  Either way,
grue is for you.

---

**Q**. How come there's nothing here?  This looks incomplete..

**A**. It is incomplete.  I'm working on it and I hope to finish it this summer (2012).
If you'd like to contribute, feel free to branch and send me pull requests or send
me bug reports / feature requests.

---

**Q**. What does MVC mean?

**A**. MVC stands for Model View Controller.  You can read more about it [here](http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller).
In short, it's a programming idea of separating a program in to three parts:

The Model, which describes the relationship between the various types of things
your program cares about.

The View, which describes what the visible user interface looks like.

The Controller, which describes how the program should react to user input.

---

**Q**. Why JavaScript?

**A**. Being the defacto language of browser scripting makes JavaScript ideal for
programs that may wish to run in a browser.  Also, thanks to node, running projects
on a real command line is also possible.  Javascript is also a really nice
object-oriented language for an MVC framework.

---

**Q**. What is meant by open source here?

**A**. grue uses the [MIT liscense](http://en.wikipedia.org/wiki/Mit_license) which means
that you can do whatever you like as long as you keep the MIT license on it and I'm
not legally responsible for anything that might go wrong.

---

**Q**. Why is it called grue?

**A**. According to the [Jargon File](http://www.catb.org/jargon/html/G/grue.html) the grue
originates from the classic text adventure game Zork, which contains the line:
"It is very dark. If you continue you are likely to be eaten by a grue."

---

**Q**. Hey! grue is a trademark, are you using it with permission?

**A**. I didn't realize, please contact me and we can fix this.

---

**Q**. Why did you make this?

**A**. I was reading [Design Patterns: Elements of Reusable Object-Oriented Software](http://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612/ref=sr_1_1?ie=UTF8&qid=1338587436&sr=8-1)
and it was talking about MVC frameworks and I remembered a particular programming
challenge that had thwarted me in the past.  You see in college I was a CS tutor
and several times a student in intro to programming had approached me at the end of a
semester who had resolved to make a text adventure game for their final project and
was supposed to use objects for it but couldn't figure out how.  I helped them but the
solutions we came up with always seemed rather inelegant to me.  For whatever reason
the description of MVC in the book made me realize that MVC was a great answer to this
problem.  Separating the relationship between the states and actions (the model) from
the logic of what to do (the controller) hadn't occurred to me and since it was always
at the end of a semester, I was inevitably too busy with my own finals to reflect on
the problem.
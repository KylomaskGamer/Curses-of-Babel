# Curses-of-Babel
Curses of Babel is a **non-handcrafted** list of curses for ADOFAI that takes 2 lists and generates a lot of them.
> For reference on what a "curse" is, refer to [Yangsy's explanation.](https://yangsy56302.github.io/adofai/cursed/index.html)

This list of curses is incomplete, and will always be incomplete, for the amount of sub-conditions, sub-actions, and a lot of things that may consider curses as a "salad" curse - a curse which does a lot of mixed things in one go, as well as the list of conditions and actions in this series is always open for more items.

This takes inspiration from the Library of Babel: a library with infinite books with a guaranteed possibility that everything and anything will appear in the library. (This, however, is not exactly the library of babel,but preferrably a programmatically generated list of ADOFAI "Curses" which makes  it seem that millions, or even billions, of curses can be possible. Heck, these curses may make no sense at all, similar to the library, completely aiming at a different scope.

# Contribution
To add things to this list, create a pull request.
There is 2 ways i will accept a PR:
1. adding a condition andor action to x.txt (conditions) and y.txt (actions)
2. adding more possible ways to expand the list of curses with sub-modifiers and adding new files in `loadcurses()` in script.js.
In any case a PR does not fall into the 2 categories, i will review your request strictly and may reject it at any time.

# Usage 
Shrimply do what Yangsy's explanation told you. For notation, this uses `NνX` for the notation. For the inverse, use the -1 exponent version.

When applying a Babel Curse, all curses have a single parameter by default, that being a Rendered Level object. In curses where Δ (or another variable) is indicated, pass the value as the second parameter. Passing a 2nd value to a curse that does not require said variable does nothing and may solely serve as throwing off players.

> [!CAUTION]
> Unlike other curses, Babel Curses do not have a "default level." `11ν3` by itself does NOT do anything if attempting to modify `11-3`, as the curse is consisted of a condition and an action in its Curse ID `NνX`. You must pass the level object in order to curse with Babel Curses at all times (for example, `11ν3(11-3)`)

> [!IMPORTANT]
> The curse notation does not use "v", it uses the greek letter *nu*, `ν`. 
> 
> The uppercase letter variant, N, does NOT invert the curse, nor does it count as a Babel Curse.

# More Nerd Stuff
because this is still technically functions executing the same set of curses, yiu can apply the following Boolean Set operators to Babel Curses:
- (15∩17)ν3 "every angled tile that is also a pseudo multiplies your speed by k" 
- (15∪17)ν3 "every angled tile or pseudo multiplies your speed by k" 
- (15⊕17)ν3 "every angled tile or pseudo, but not both, multiplies your speed by k"

For more operators to theow everyone off, refer to thsi wikipedia page on [boolean algebra](https://en.wikipedia.org/wiki/Boolean_algebra) or the page on [the lsit lf logic operators.](https://en.wikipedia.org/wiki/List_of_logic_symbols)
# Curses-of-Babel
Curses of Babel is a list of curses for ADOFAI that takes 2 lists and generates a lot of them.
> For reference on what a "curse" is, refer to [Yangsy's explanation.](https://yangsy56302.github.io/adofai/cursed/index.html)

This list of curses is incomplete, and will always be incomplete, for the amount of sub-conditions, sub-actions, and a lot of things that may consider curses as a "salad" curse - a curse which does a lot of mixed things in one go, as well as the list of conditions and actions in this series.

# Contribution
To add things to this list, create a pull request.
There is 2 ways i will accept a PR:
1. adding a condition andor action to x.txt (conditions) and y.txt (actions)
2. adding more possible ways to expand the list of curses with sub-modifiers and adding new files in `loadcurses()` in script.js.
In any case a PR does not fall into the 2 categories, i will review your request strictly and may reject it at any time.

# Usage 
Shrimply do what Yangsy's explanation told you. For notation, this uses `NνX` for the notation. For the inverse, use the -1 exponent version.

When applying a Babel Curse, all curses have a single parameter by default, that being a Rendered Level object. In curses where Δ is indicated, pass the value as the second parameter. Passing a 2nd value to a curse that does not require Δ does nothing and can solely serve as throwing off players.

> [!CAUTION]
> Unlike other curses, Babel Curses do not have a "default level." `11ν3` by itself does NOT do anything if attempting to modify `11-3`, as the curse is consisted of a condition and an action in its Curse ID `NνX`. You must pass the level object in order to curse with Babel Curses at all times (for example,` 11ν3(11-3)`)

> [!IMPORTANT]
> The curse notation does not use "v", it uses the greek letter *nu*, `ν`. 
> 
> _ The uppercase letter variant, N, does not invert the curse, does NOT invert the curse, nor does it count as a Babel Curse.
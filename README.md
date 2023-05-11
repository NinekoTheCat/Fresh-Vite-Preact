# Fresh Vite Monster

integrates a vite bundled preact library with a fresh app in a single monorepo

the usage is quite simple too

to run the fresh app in production mode do the
`serve` nx task on the fresh-vite-importer project

to run the fresh app in dev mode use the
`dev` nx task on the fresh-vite-importer project

to build the library use the
`build` nx task on the vite-preact-lib project

## Usage
to display a simple page first install all the packages with 
`yarn`

and run
`nx serve fresh-vite-importer`

## why?

a big feature I think fresh was missing was the ability to use sass and define component scoped modules, this does it all!.
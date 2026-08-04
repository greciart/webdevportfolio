# Immersive / game jam gallery

Drop your game jam screenshots, game UI mockups and interactive-experience images
**in this folder** and they appear automatically in the "Immersive Interactive
Experiences" gallery on `/services`. No code changes needed.

- **Formats:** `.webp` (preferred), `.png`, `.jpg`, `.avif`
- **Recommended width:** ~800–1200px
- **Filenames become the captions**, so name them descriptively with hyphens:
  - `neon-runner-game-jam-ui.webp` → "Neon Runner Game Jam UI"
  - `pixel-quest-inventory-3d-assets.webp` → "Pixel Quest Inventory 3D Assets"

The words `ui`, `ux`, `3d`, `2d`, `vr`, `ar` and `npc` are automatically uppercased.

The empty-state placeholder shown on the page disappears as soon as there is at
least one image here.

Logic lives in `src/data/services.ts` (`immersiveGallery`).

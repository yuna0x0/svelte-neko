# @yuna0x0/svelte-neko

A Svelte component that adds an animated cat that chases your mouse cursor around the screen. This is a Svelte 5 port of the popular [oneko.js](https://github.com/adryd325/oneko.js) library.

**[Live Demo](https://svelte-neko.pages.dev)**

## Features

- Interactive cat that follows your mouse cursor
- Smooth animations with sprite-based movement
- Idle animations when the cat reaches the cursor
- Wall-scratching animations when near screen edges
- Respects `prefers-reduced-motion` accessibility settings
- Compatible with Svelte 5

## Installation

```bash
pnpm install @yuna0x0/svelte-neko
```

## Usage

### Svelte 5

```svelte
<script>
	import { Neko } from '@yuna0x0/svelte-neko';
</script>

<Neko nekoImage="/path/to/oneko.gif" />
```

## Props

| Prop                    | Type      | Default      | Description                                             |
| ----------------------- | --------- | ------------ | ------------------------------------------------------- |
| `nekoImage`             | `string`  | **Required** | Path to the neko sprite image (typically `oneko.gif`)   |
| `tracking`              | `boolean` | `true`       | Whether the neko should track/follow the mouse cursor   |
| `toggleTrackingOnClick` | `boolean` | `false`      | Whether clicking the neko should toggle tracking on/off |

## Getting the Neko Image

You'll need a neko sprite sheet image. You can:

1. Download from the [demo site](https://svelte-neko.pages.dev/oneko.gif)
2. Download from the [original oneko.js repository](https://github.com/adryd325/oneko.js)
3. Create your own sprite sheet following the 32x32 pixel format

## Examples

### Toggle tracking on click

```svelte
<script>
	import { Neko } from '@yuna0x0/svelte-neko';
</script>

<Neko nekoImage="/oneko.gif" toggleTrackingOnClick={true} />
```

### Start with tracking disabled

```svelte
<script>
	import { Neko } from '@yuna0x0/svelte-neko';
</script>

<Neko nekoImage="/oneko.gif" tracking={false} />
```

### Programmatically control tracking

```svelte
<script>
	import { Neko } from '@yuna0x0/svelte-neko';

	let isTracking = true;

	function toggleTracking() {
		isTracking = !isTracking;
	}
</script>

<Neko nekoImage="/oneko.gif" tracking={isTracking} />

<button on:click={toggleTracking}>
	{isTracking ? 'Disable' : 'Enable'} Neko
</button>
```

## Accessibility

This component automatically respects the user's `prefers-reduced-motion` setting. When reduced motion is preferred, the neko will not be rendered.

## Development

```bash
# Clone the repository
git clone https://github.com/yuna0x0/svelte-neko.git
cd svelte-neko

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Run tests
pnpm test

# Build the library
pnpm package
```

## Credits

- Original [oneko.js](https://github.com/adryd325/oneko.js) by [@adryd325](https://github.com/adryd325)
- Forked from [khromov/svelte-neko](https://github.com/khromov/svelte-neko)

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. Make sure to:

1. Run `pnpm lint` and `pnpm check` before submitting
2. Add tests for new features
3. Update documentation as needed

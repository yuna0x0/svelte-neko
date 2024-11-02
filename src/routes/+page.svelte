<script lang="ts">
	import Neko from '$lib/Neko.svelte';
</script>

<h1>@yuna0x0/svelte-neko</h1>

<Neko nekoImage="/oneko.gif" toggleTrackingOnClick />

You can get the <code>oneko.gif</code> from <a href="/oneko.gif">here</a>.
<br /><br />
<h2>Props</h2>
<code>nekoImage</code> (string): The path to the neko image.
<br />
<code>tracking</code> (boolean): Is the neko tracking the mouse?
<br />
<code>toggleTrackingOnClick</code> (boolean): Should the neko toggle <code>tracking</code> on click?
<br /><br />

<h2>Examples</h2>

Svelte 5:
<pre>
    {`<script>
        import { Neko } from '@yuna0x0/svelte-neko';
    </script>

    <Neko nekoImage="path/to/oneko.gif" toggleTrackingOnClick />`}
</pre>

<br />

Svelte 4:
<pre>
    {`<script>
        import { Neko4 } from '@yuna0x0/svelte-neko';
    </script>

    <Neko nekoImage="path/to/oneko.gif" toggleTrackingOnClick />`}
</pre>

<script lang="ts">
	let tweet = ''
	let maxCharacters = 140

	import { enhance } from '$root/lib/form'

	$: charactersLeft = maxCharacters - tweet.length
</script>

<div class="compose">
	<form action="/home" method="post" autocomplete="off" 
  use:enhance={{ result: ({ form }) => form.reset() }}>
	  <img src="/profile/brandon/avatar.webp" alt="Avatar" />
		<input
			aria-label="Enter your Tweet"
			bind:value={tweet}
			name="tweet"
			placeholder="What's your hot take?"
			type="text"
		/>
		<button
			class="btn"
			class:error={charactersLeft < 0}
			disabled={charactersLeft <= 0}
			type="submit"
		>
			{charactersLeft === maxCharacters
				? 'Tweet'
				: charactersLeft}
		</button>
	</form>
</div>

<style>
	.compose {
    justify-content: center;
    align-items: flex-start;
		gap: var(--spacing-16);
		padding: var(--spacing-16) var(--spacing-24);
		border-bottom: 1px solid var(--color-border-primary);
	}

	img {
    display: none;
		width: 48px;
		height: 48px;
		border-radius: 50%;
    margin: var(--spacing-16)
	}

	form {
		display: flex;
    flex-wrap: wrap;
		align-items: center;
		gap: var(--spacing-16);
	}

	input {
		color: var(--color-text-primary);
		background-color: transparent;
    flex: 1 1 auto;
    max-width: 100%;
	}

	button {
		min-width: 80px;
    flex: 1 1 auto;
		font-size: var(--font-16);
		padding: var(--spacing-16);
	}

	.error {
		color: tomato;
	}


	@media (min-width: 1024px) {
    img {
      display: block;
    }
  }
</style>

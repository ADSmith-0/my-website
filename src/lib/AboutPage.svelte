<script>
import Page from "./Page.svelte";
</script>

<Page id="about">
  <h2>About me</h2>
  <p class="mt-4 mb-10">
    I&apos;m a fullstack developer that enjoys learning new things and trying
    new technologies. I&apos;ve worked with lots of different projects, below is
    non&hyphen;exhaustive list of things that I&apos;ve enjoyed and what
    I&apos;m currently working on
  </p>
  <div
    class="flex-row-center justify-content-evenly align-items-start gap-5 mt-10"
  >
    <div class="flex-column-center justify-content-start">
      <h3 class="mb-4">Favourite technologies</h3>
      <ul>
        <li>Svelte</li>
        <li>TypeScript</li>
        <li>Neovim</li>
        <li>Bash</li>
      </ul>
    </div>
    <div class="flex-column-center justify-content-start">
      <h3 class="mb-4">Currently learning</h3>
      <ul>
        <li>
          <a href="https://www.refactoringui.com/" class="link"
            >Refactoring UI</a
          >
        </li>
        <li>Go lang</li>
        <li>The <strong>C</strong> programming language</li>
      </ul>
    </div>
  </div>
</Page>

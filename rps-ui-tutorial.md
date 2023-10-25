rps-ui-tutorial.html

<div class="lesson-content__panel">
    <ol>
      <li>Set up a new branch on your previous Rock Paper Scissors repo
        <ol>
          <li>Since we’ll be making a UI for our Rock Paper Scissors game, make a new branch and change to it with the command <code>git checkout -b rps-ui</code>.</li>
          <li>
            <p>You are now working in the <code>rps-ui</code> branch, locally. However, this branch does not exist in your remote repo yet. If you go to your github repo page, you’ll see that you only have 1 branch, which would be <code>main</code>. Let’s push this new branch to your remote repo with the command <code>git push origin rps-ui</code>. Now, you’ll see two branches in your GitHub repository! You can select the new branch on GitHub using the dropdown branch selector shown in the screenshot below.</p>
            <p><a href="https://cdn.statically.io/gh/TheOdinProject/curriculum/46c18d8445051e016b1e415fe0227a0fa33cc825/foundations/javascript_basics/revisiting_rock_paper_scissors/imgs/00.png" target="_blank" rel="noopener noreferrer"><img src="https://cdn.statically.io/gh/TheOdinProject/curriculum/46c18d8445051e016b1e415fe0227a0fa33cc825/foundations/javascript_basics/revisiting_rock_paper_scissors/imgs/00.png" alt="Dropdown menu of branches on GitHub"></a></p>
          </li>
          <li>Make sure you are on the <code>rps-ui</code> branch. You can check this, with the <code>git branch</code> command. The branch you are currently on will have an (*)asterisk next to it. If you’re in another branch for some reason, change to <code>rps-ui</code> with the command <code>git checkout rps-ui</code>. Now you’re all set to work on your new feature! Note: You can add files, commit to this branch, and push changes to your repo, just like you would with the main branch. Everything is the same except when you push the changes, you’d use <code>git push origin rps-ui</code> instead of <code>git push origin main</code>, since we’re pushing to our new branch.</li>
        </ol>
      </li>
      <li>In our UI, the player should be able to play the game by clicking on buttons rather than typing their answer in a prompt.
        <ol>
          <li>For now, remove the logic that plays exactly five rounds.</li>
          <li>Create three buttons, one for each selection. Add an event listener to the buttons that call your <code>playRound</code> function with the correct <code>playerSelection</code> every time a button is clicked. (you can keep the <code>console.log</code>s for this step)</li>
          <li>Add a <code>div</code> for displaying results and change all of your <code>console.log</code>s into DOM methods.</li>
          <li>Display the running score, and announce a winner of the game once one player reaches 5 points.</li>
          <li>You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of a programmer’s life.</li>
        </ol>
      </li>
      <li>Once you’re all done with your UI and made sure everything’s satisfactory, ensure all of your changes are committed to the <code>rps-ui</code> branch with <code>git status</code> before continuing.</li>
      <li>Now let’s take a look at how we can merge the changes from our <code>rps-ui</code> branch back to our <code>main</code> branch.
        <ol>
          <li>Checkout the branch we want to merge INTO i.e. <code>main</code> with the command <code>git checkout main</code>.</li>
          <li>Now let’s merge our <code>rps-ui</code> branch into <code>main</code>, our current branch, with <code>git merge rps-ui</code>.</li>
          <li>If everything goes fine, our <code>rps-ui</code> branch is now successfully merged with main! Use <code>git log</code> and you’ll see all the commits you’ve made to your feature branch on top of the commits you made to the main branch. Now for our final step!</li>
          <li>Let’s push our <code>main</code> branch into our remote repo by running <code>git push origin main</code> . Go to your GitHub repo and you’ll see that our <code>main</code> branch will have all the changes and commits you made to the <code>rps-ui</code> branch. Congratulations! You’ve successfully pushed your first feature into your production branch!</li>
          <li>Now that we have all our code in the main branch, we don’t really need our <code>rps-ui</code> branch anymore. Let’s do some cleanup, both locally and in the remote repo. Delete the branch from our local repo with <code>git branch -d rps-ui</code> and also delete it from the remote repo on GitHub with <code>git push origin --delete rps-ui</code>. Congrats, we’re all done with our cleanup!</li>
        </ol>
      </li>
      <li>Make sure to publish the project on GitHub Pages and add a live preview link in the <a href="https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/rock-paper-scissors" target="_blank" rel="noopener noreferrer">project lesson</a>.</li>
    </ol>
  </div>
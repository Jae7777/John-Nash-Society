import Image from "next/image";

export default function Lecture1Page() {
  return (
    <main>
      <article className="prose prose-invert lg:prose-xl mx-auto py-24">
        <h1>Lecture 1: The World of Game Theory</h1>
        <p className="italic">
          If you know the enemy and know yourself, you need not fear the result
          of a hundred battles.
        </p>
        <p className="italic">
          If you know yourself but not the enemy, for every victory gained you
          will also suffer a defeat.
        </p>
        <p className="italic">
          If you know neither the enemy nor yourself, you will succumb in every
          battle.
        </p>
        <p className="italic">
          Game Theory is the study of strategic interaction among rational
          players
        </p>
        <strong>"Sun Tzu - Art of War"</strong>
        <ul>
          <li>Interactions are "Data driven (AI) decision making (Human)"</li>
          <li>Games Theory is less than 100 year old</li>
        </ul>
        <strong>Sample Game: Push or not to push? That is the question</strong>

        <h2>Backstory</h2>
        <p>The goal of the game is for an individual player to keep as much of the $100 as they can.</p>
        <p>Assuming each player will act rationally, a player will choose the option that maximizes the amount of money they keep</p>
        <h2>Rules</h2>
        <p>51 players are given $100 and a button</p>
        <p>Pushing the button limits a players losses</p>
        <p>If a player pushes their button, they lose $1 for every other player that pushed their button</p>
        <p>If a player doesn't push their button, they lose $2 for every other player that pushed their button</p>
        <p>No cooperation. Players have to make their decision without knowing what other players have decided</p>

        <h2>Expected Payoffs</h2>
        <p>How much money a player keeps depends on the other 50 players</p>
        <p>Below is a Game Tree, also known as a Decision Tree</p>
        <Image src="/lectures/1/decision-tree.png" alt="Game Tree" width={1000} height={1000} className="w-full" />
        <p>Note: The Game Tree in the example above is incomplete. It is missing the probability of a decision being made</p>
        <p>You will later learn how to build a complete tree. For now, assume every decision is equally likely</p>
        
        <h2>Common Knowledge</h2>
        <p>Everyone knows the rules and understand how to maximize their expected payoffs</p>
        
        <h2>Play the game</h2>
        <p>On the count of three….one…..two….THREE</p>
        
        <h2>Results</h2>
        <p>Did you or didn't you push the button? What was your thought process? Did others push their button? What was their thought process?</p>
        
        <h2>Analyzing the Results</h2>
        <p>Between 30% and 70% (average 50%) push the button.</p>
        <p>Just looking at the payoffs, the best outcome is everyone NOT to push the button.</p>
        <p>No one loses any money.</p>
        <p>Question is, did everyone else agree? This result goes against common sense.</p>
        <p>Everyone loses some part of the $100, unless you are the only one that pushed their button.</p>
        <p>Possible reason everyone pushes their button "Someone else is going to push their button, so I limit my losses by pushing my button."</p>
        <p>If I don't push the button and someone else does, I end up with my worst expected payoff.</p>
        <p>This is the <strong>Prisoner's Dilemma</strong>: the most important game in Game Theory.</p>
        
        <h2>Congratulations! You played your first game.</h2>
        <p>Was it the outcome you expected?</p>
        
        <h2>Now let's do a thought experiment</h2>
        <p>You're the President of the United States.</p>
        <p>You're at war and playing this game with another nuclear nation … would you push the button?</p>
        <p>"It's all fun and games until someone gets hurt"</p>
        
        <h2>Parts of a Game</h2>
        <ul>
          <li>
            <strong>Rational Players</strong>
            <ul>
              <li>Make decisions that maximize their expected payoffs</li>
            </ul>
          </li>
          <li>
            <strong>Common Knowledge</strong>
            <ul>
              <li>Everyone knows the rules</li>
              <li>Everyone knows the same information about the game at the same time</li>
            </ul>
          </li>
          <li>
            <strong>Expected Payoffs</strong>
            <ul>
              <li>What players expect to win (what players value)</li>
              <li>Different players in the same game may have different payoffs</li>
              <li>Payoffs are not always measured in $</li>
            </ul>
          </li>
          <li>
            <strong>Strategy</strong>
            <ul>
              <li>Set of choices a player will make and the expected payoffs associated with those choices</li>
              <li><strong>Dominant Strategy:</strong> The set of choices that maximizes expected payoffs</li>
            </ul>
          </li>
          <li>
            <strong>Strategy Profile</strong>
            <ul>
              <li>A collection of strategies</li>
              <li>Strategies interact with other strategies</li>
            </ul>
          </li>
        </ul>
        
      </article>
    </main>
  );
}

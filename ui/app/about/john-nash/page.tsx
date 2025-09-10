import { Separator } from "@/app/components/ui/separator";

export default function JohnNashPage() {
  return (
    <main>
      <article className="prose prose-invert lg:prose-xl mx-auto py-24">
        <h1>Who was John Nash?</h1>
        <p>
          John Nash (1928 – 2015) was an American mathematician whose work
          fundamentally shaped game theory, economics, and mathematics. He’s
          most famous for the concept of the Nash Equilibrium, which describes a
          stable outcome in a game where no player can improve their situation
          by unilaterally changing strategy.
        </p>
        <Separator />
        <h2>John Nash's Contributions to the World</h2>
        <ul>
          <li>
            <strong>Game Theory</strong>
            <ul>
              <li>
                Introduced the Nash Equilibrium (1950), a cornerstone of modern
                economics, political science, and AI multi-agent systems.
              </li>
              <li>
                Showed that in any finite game, at least one equilibrium exists
                (sometimes involving mixed strategies).
              </li>
            </ul>
          </li>
          <li>
            <strong>Mathematics</strong>
            <ul>
              <li>
                Contributions in differential geometry and partial differential
                equations (PDEs).
              </li>
              <li>
                His work on nonlinear PDEs earned him the Abel Prize (2015).
              </li>
            </ul>
          </li>
          <li>
            <strong>Economics</strong>
            <ul>
              <li>
                Awarded the 1994 Nobel Prize in Economic Sciences, shared with
                Reinhard Selten and John Harsanyi, for pioneering analysis of
                equilibria in non-cooperative games.
              </li>
            </ul>
          </li>
        </ul>
        <Separator />
        <h2>Personal Life</h2>
        <ul>
          <li>Studied at Princeton and MIT, producing groundbreaking work in his 20s.</li>
          <li>Struggled with schizophrenia for decades, retreating from public life.</li>
          <li>Made a remarkable recovery and returned to academic work later in life.</li>
        </ul>
        <Separator />
        <h2>Impact on the World</h2>
        <ul>
          <li>
            <p>Nash Equilibrium is used in:</p>
            <ul>
              <li>Economic (market competition, auctions)</li>
              <li>International relations (arms races, treaties)</li>
              <li>Biology (evolutionary stable strategies)</li>
              <li>Computer Science & AI (multi-agent systems, auctions, negotiation, reinforcement learning)</li>
            </ul>
          </li>
        </ul>
      </article>
    </main>
  );
}

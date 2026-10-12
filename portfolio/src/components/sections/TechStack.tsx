import TechTile from "@/components/ui/TechTile";
import { techStack } from "@/lib/content";

export default function TechStack() {
  return (
    <section id="stack" className="page-col scroll-mt-20">
      <div className="border-t border-line py-14">
        <h2 className="text-sm font-semibold tracking-[0.2em] text-muted">TECH STACK</h2>
        <div className="mt-8 space-y-8">
          {techStack.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm text-muted">{group.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-3">
                {group.items.map((id) => (
                  <li key={id}>
                    <TechTile id={id} tooltip />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

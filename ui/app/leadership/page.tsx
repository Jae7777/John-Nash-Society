import Image from "next/image";

const members = [
  {
    name: "Alex Kim",
    position: "President",
    image: "/leadership/president.jpg",
    description:
      "Leads the society, sets vision, and represents the club at official events.",
    borderColor: "#5c4a15",
  },
  {
    name: "Priya Desai",
    position: "Vice President",
    image: "/leadership/vice-president.jpg",
    description:
      "Supports the president and coordinates club operations and events.",
    borderColor: "#15335c",
  },
  {
    name: "Samir Patel",
    position: "Events Coordinator",
    image: "/leadership/events-coordinator.jpg",
    description: "Organizes workshops, talks, and competitions for members.",
    borderColor: "#155c3b",
  },
  {
    name: "Jordan Lee",
    position: "Treasurer",
    image: "/leadership/treasurer.jpg",
    description: "Manages finances, budgets, and fundraising for the society.",
    borderColor: "#155b5c",
  },
  {
    name: "Maya Johnson",
    position: "Outreach/PR",
    image: "/leadership/outreach-pr.jpg",
    description: "Builds partnerships, leads community engagement, and manages public relations.",
    borderColor: "#5c152b",
  },
  {
    name: "Prof. Rachel Evans",
    position: "Faculty Advisor",
    image: "/leadership/faculty-advisor-evans.jpg",
    description:
      "Provides guidance, mentorship, and academic support to the society.",
    borderColor: "#5c3615",
  },
  {
    name: "Emily Chen",
    position: "Project Manager",
    image: "/leadership/project-manager.jpg",
    description:
      "Oversees club projects and ensures timely completion of initiatives.",
    borderColor: "#5c3315",
  },
  {
    name: "Lucas Rivera",
    position: "Marketing",
    image: "/leadership/marketing.jpg",
    description:
      "Manages social media, newsletters, and publicity for the club.",
    borderColor: "#5c4e15",
  },
];
export default function MembersPage() {
  return (
    <main className="container py-24 mx-auto px-2">
      <h2 className="text-center text-4xl font-semibold">Leadership</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
        {members.map((member) => (
          <div
            key={member.name}
            className="flex flex-col items-center bg-card  shadow-md p-6 px-12 aspect-[4/5] bg-[#18191c border-1 border-foreground/20 shadow-lg"
          >
            <div className="relative aspect-square w-full ">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="rounded-lg object-cover mb-4 border-1 border-foreground/10 p-8"
                style={{ backgroundColor: member.borderColor }}
              />
            </div>
            <div className="mt-8 text-center">
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-sm text-foreground/80 mt-1">{member.position}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-foreground/80 mt-12">Positions elected annually in the Spring to take effect in the Fall.</p>
    </main>
  );
}

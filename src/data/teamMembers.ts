export interface TeamMember {
  id: number;
  name: string;
  role: string;
  userpic: string;
  quote: string;
  bio: string;
}
import User0 from '../../public/team/0.jpg'

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Robert Kinyua",
    role: "CO-FOUNDER & CHAIRMAN ",
    userpic: "/team/0.jpg",
    quote: `You may be leaderless in the streets to protect yourselves, but you have professional legal
support in the background to make sure your demands become law.`,
    bio: `Robert Kinyua is a legal professional and the Co-Founder Chairman of KYUID. With
specialized expertise in litigation, commercial law, and constitutional interpretation, Robert
provides the strategic legal roadmap for our organization.`
  },
  {
    id: 2,
    name: "Triza Kamuyu Kanyi",
    role: "KYUID PARLIAMENTARY DIRECTOR",
    userpic: "/team/2.jpg",
    quote: "Every young person deserves a seat at the table where decisions are made.",
    bio: `Triza Kamuyu Kanyi is a trained lawyer and a fierce advocate for civic justice. Her work
focuses on the intersection of human rights and governance.`
  },
  {
    id: 3,
    name: "Matildah Mwende Nyagah",
    role: "POLICY DIRECTOR",
    userpic: "/team/4.jpg",
    quote: "Stories have the power to change minds, hearts, and policies.",
    bio: `Matildah Mwende Nyagah is a dedicated lawyer and advocate whose passion lies in the
inclusion of marginalized voices in the democratic process.`
  },


];

export const teamMembers1: TeamMember[] = [

  {
    id: 1,
    name: "Alfred Karani",
    role: "TRAINING DIRECTOR & TEACHER TRAINER",
    userpic: "/team/6.jpg",
    quote: `The future of Kenya lies in equipping young people with the right skills and values. My
mission is to build a generation that is informed, ethical, innovative, and confident enough to
shape the nation through science and logic.`,
    bio: `Alfred Karani is a seasoned educator and specialist in Mathematics and Physics. As the
Chairperson of the Education pillar within KYUID, he brings a unique focus on
problem-solving, scientific thinking, and the demystification of STEM subjects for Kenyan
youth.`
  },

];

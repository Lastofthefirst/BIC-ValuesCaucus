import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import portraitImage from '@/images/portrait.jpg'

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'The Values Caucus at the United Nations provides an open forum for discussing and exploring values that serve all of humanity.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            The Values Caucus at the United Nations
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
              Who We Are
            </h2>
            <p>
              The Mission of the Values Caucus at the United Nations in New York is to provide an open forum, in the context of the UN, where we can safely and respectfully discuss and explore our values, old and new, shared and differing, in order to allow a new culture to emerge that serves all of humanity and the planet upon which we live.
            </p>
            <p>
              Participation in the Values Caucus is open to NGOs, governments, United Nations personnel, United Nations missions, organizations and dedicated individuals. As humanity evolves, new values systems emerge in response to changing life conditions. Which values will serve us best as we face the challenges before us in the 21st Century? Above all, we need to understand and respect each other's values and learn to live in peace together.
            </p>

            <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 pt-4">
              Our History
            </h2>
            <p>
              <strong>1994:</strong> A group of NGOs convinced of the basic need to consider values in global affairs gathered at the first Preparatory Conference for the World Social Summit on Social Development (UNWSSD). The group elected Bawa Jain, Rev. Chung Ok Lee, and Dr. Nancy Roof as co-chairs. Ambassador Juan Somavía, Chairman of the UNWSSD, became the chief supporter of the effort, giving it the legitimacy that it needed.
            </p>
            <p>
              <strong>1995:</strong> At the United Nations World Summit on Sustainable Development in Copenhagen, the Values Caucus conducted daily experiential workshops and seminars on framing global issues around underlying values. Daily interactions with governmental representatives and support from Ambassador Somavía were successful in the inclusion of values for the first time in the final documents.
            </p>
            <p>
              <strong>1996:</strong> Deborah Moldow was elected Chair and initiated the innovative Coffee Series, inviting Permanent Representatives to the United Nations to speak on an informal basis with NGOs. This series was originally undertaken under the guidance of H.E. Mrs. Claudia Fritsche, Permanent Representative of Liechtenstein.
            </p>
            <p>
              <strong>2000:</strong> At the United Nations Millennium Summit, world leaders agreed to a set of time-bound and measurable goals for combating poverty, hunger, disease, illiteracy, environmental degradation and discrimination against women. At the beginning of the Millennium Declaration, subtitled "Values and Principles," values were considered fundamentally essential to international relations in the twenty-first century: Freedom, Equality, Solidarity, Tolerance, Respect for Nature and Shared Responsibility.
            </p>
            <p>
              <strong>2004:</strong> The Values Caucus celebrated its 10th Anniversary with many programs and events, including a special gathering on The Ethical & Spiritual Dimensions of the Millennium Development Goals.
            </p>
            <p>
              <strong>2005:</strong> On the occasion of the 60th Anniversary of the United Nations and the 100th Anniversary of the birth of Dag Hammarskjöld, the second Secretary-General of the UN, the Values Caucus hosted a major event titled "The Spirit of the United Nations: Markings for the Future" in Conference Room 3 at UN Headquarters, attended by over 650 people.
            </p>

            <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 pt-4">
              Current Leadership
            </h2>
            <p>
              <strong>Co-Chairs:</strong>
            </p>
            <ul className="list-disc pl-6">
              <li><strong>Carl Murrell</strong>, Baha'is of the United States</li>
              <li><strong>Julia Grindon-Welch</strong>, Brahma Kumaris World Spiritual University</li>
            </ul>

            <p className="pt-4">
              <strong>Coordinating Council:</strong>
            </p>
            <ul className="list-disc pl-6">
              <li><strong>Frances Edwards</strong>, Findhorn Foundation</li>
              <li><strong>Denise Scotto</strong>, International Federation of Women in Legal Careers</li>
              <li><strong>Jerry Spivack</strong>, CCC/UN</li>
            </ul>

            <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 pt-4">
              Past Leadership
            </h2>
            <p>
              The Values Caucus honors its past chairs who helped establish and grow this important forum:
            </p>
            <ul className="list-disc pl-6">
              <li><strong>Deborah Moldow</strong>, The World Peace Prayer Society</li>
              <li><strong>Bawa Jain</strong>, Millennium World Peace Summit</li>
              <li><strong>Chung Ok Lee</strong>, Won Buddhism</li>
              <li><strong>Nancy Roof</strong>, Center for Psychological and Social Change</li>
            </ul>
          </div>
        </div>
        <div className="lg:pl-20">
          <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              <MailIcon className="h-6 w-6 flex-none fill-zinc-500 dark:fill-zinc-400" />
              <span className="ml-3">Contact Us</span>
            </h2>
            <div className="mt-6 space-y-4 text-sm text-zinc-600 dark:text-zinc-400">
              <div>
                <p className="font-semibold text-zinc-900 dark:text-zinc-100">The Values Caucus</p>
                <p>866 UN Plaza, Suite 120</p>
                <p>New York, NY 10017</p>
                <p>USA</p>
              </div>
              <div>
                <p><strong>Tel:</strong> 212-803-2531</p>
                <p><strong>Fax:</strong> 212-803-2566</p>
              </div>
              <div>
                <p><strong>General inquiries:</strong></p>
                <Link
                  href="mailto:valuescaucus@valuescaucus.org"
                  className="text-teal-500 hover:text-teal-600 dark:hover:text-teal-400"
                >
                  valuescaucus@valuescaucus.org
                </Link>
              </div>
              <div>
                <p><strong>Co-Chairs:</strong></p>
                <Link
                  href="mailto:carlmurrell@valuescaucus.org"
                  className="block text-teal-500 hover:text-teal-600 dark:hover:text-teal-400"
                >
                  carlmurrell@valuescaucus.org
                </Link>
                <Link
                  href="mailto:juliagrindon-welch@valuescaucus.org"
                  className="block text-teal-500 hover:text-teal-600 dark:hover:text-teal-400"
                >
                  juliagrindon-welch@valuescaucus.org
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

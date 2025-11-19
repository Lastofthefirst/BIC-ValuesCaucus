import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

const sampleAmbassadors = [
  {
    name: 'H.E. Mrs. Claudia Fritsche',
    country: 'Liechtenstein',
    description:
      'Permanent Representative of Liechtenstein, served as Vice President of the International Association of Permanent Representatives. Ambassador Fritsche was the first guest of the Coffee Series and helped introduce the Values Caucus to other ambassadors.',
    year: '1996',
  },
  {
    name: 'H.E. Mr. Danilo Turk',
    country: 'Slovenia',
    description:
      'Permanent Representative of the Republic of Slovenia to the United Nations. One of the first guests to speak at a Values Caucus meeting, sharing experiences from the Seminar on Ethical and Spiritual Dimensions of Social Progress.',
    year: '1994',
  },
  {
    name: 'Ambassador Juan Somavía',
    country: 'Chile',
    description:
      'Director-General of the International Labour Organization (ILO) in Geneva and Chairman of the World Summit for Social Development. Chief supporter of the Values Caucus from its inception, providing crucial legitimacy and support.',
    year: '1994',
  },
]

export const metadata = {
  title: 'Coffee Series',
  description: 'Informal dialogues between UN Ambassadors and NGOs, fostering understanding and collaboration.',
}

export default function Coffees() {
  return (
    <SimpleLayout
      title="The Coffee Series"
      intro="The Coffee Series is designed to give individual delegates the opportunity to meet with NGOs on an informal basis, where we may share some of the concerns that touch us most deeply. The purpose of this series is to get to know one another in a friendly atmosphere, so that we may work together in the future to build a stronger UN and a better world. The ambassadors are invited to speak from their personal sense of mission, ideals and commitments. They discuss values issues in their own countries, or values related to issues currently before the UN, or relations with NGOs here or at home."
    >
      <div className="space-y-12">
        <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
            About the Coffee Series
          </h2>
          <div className="space-y-4 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              The Coffee Series was initiated in 1996 by Deborah Moldow, who was elected Chair of the Values Caucus. This innovative program invites Permanent Representatives to the United Nations to speak on an informal basis with NGOs.
            </p>
            <p>
              The series was originally undertaken under the guidance of H.E. Mrs. Claudia Fritsche, Permanent Representative of Liechtenstein, who was then serving as Vice President of the International Association of Permanent Representatives. Ambassador Fritsche was our first guest, and helped introduce the Values Caucus to other ambassadors, who were delighted to accept our invitation.
            </p>
            <p>
              The Coffees have been, without exception, wonderful opportunities to learn the perspective from another country, while also getting to know on a personal basis one of its most accomplished diplomats. The ambassadors have also appreciated the open communication with NGOs that is rarely available to them, as well as the warm hospitality demonstrated by the members of the Values Caucus, who are always careful to treat guests with respect.
            </p>
            <p>
              These meetings are typically held on Thursday mornings from 9:00 AM to 10:00 AM in a pre-announced location.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-8">
            Featured Ambassador Guests
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-400 mb-8">
            Over the years, the Values Caucus has been honored to host numerous ambassadors and UN representatives. Here are some of our distinguished guests who have shared their insights and experiences with our community.
          </p>
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-2"
          >
            {sampleAmbassadors.map((ambassador) => (
              <Card as="li" key={ambassador.name}>
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                  <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">
                    {ambassador.year}
                  </span>
                </div>
                <h3 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                  {ambassador.name}
                </h3>
                <p className="mt-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                  {ambassador.country}
                </p>
                <Card.Description>{ambassador.description}</Card.Description>
              </Card>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
            Coffee Books Archive
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-400">
            The Values Caucus has maintained detailed records of our Coffee Series meetings over the years. These "Coffee Books" contain summaries and insights from each ambassador's visit, preserving valuable discussions on values, international relations, and cooperation between UN missions and NGOs.
          </p>
          <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400 italic">
            Coffee Books are available by year, documenting meetings from 1996 to the present. For access to these archives, please contact the Values Caucus.
          </p>
        </div>
      </div>
    </SimpleLayout>
  )
}

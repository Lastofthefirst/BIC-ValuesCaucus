import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function MemberSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Member({ name, type, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3">
        {name}
      </Card.Title>
      {type && (
        <p className="mt-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          {type}
        </p>
      )}
      {children && <Card.Description>{children}</Card.Description>}
    </Card>
  )
}

export const metadata = {
  title: 'Members',
  description: 'Organizations and individuals who participate in the Values Caucus at the United Nations.',
}

export default function Members() {
  return (
    <SimpleLayout
      title="Member Organizations"
      intro="Participation in the Values Caucus is open to NGOs, governments, United Nations personnel, United Nations missions, organizations and dedicated individuals. Over the years, numerous organizations have participated in Values Caucus activities, contributing their unique perspectives and expertise to our discussions on values and global affairs."
    >
      <div className="space-y-20">
        <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 mb-12">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
            Join the Values Caucus
          </h2>
          <div className="space-y-4 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              The Values Caucus welcomes participation from:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Non-governmental organizations (NGOs)</li>
              <li>Government representatives</li>
              <li>United Nations personnel</li>
              <li>UN missions</li>
              <li>Professional organizations</li>
              <li>Dedicated individuals</li>
            </ul>
            <p className="mt-4">
              We generally meet the first Thursday of each month from 1:15 to 2:45 PM in conference rooms at UN Headquarters. Our meetings provide an open forum where we can safely and respectfully discuss and explore our values, old and new, shared and differing.
            </p>
            <p>
              For information about membership and participation, please <a href="mailto:valuescaucus@valuescaucus.org" className="text-teal-500 hover:text-teal-600 dark:hover:text-teal-400">contact us</a>.
            </p>
          </div>
        </div>

        <MemberSection title="Founding and Core Organizations">
          <Member name="Baha'is of the United States" type="Religious Organization">
            Active participant since the founding of the Values Caucus. Co-Chair Carl Murrell represents this organization.
          </Member>
          <Member name="Brahma Kumaris World Spiritual University" type="Spiritual Organization">
            Key supporter and participant in Values Caucus activities. Co-Chair Julia Grindon-Welch represents this organization.
          </Member>
          <Member name="Won Buddhism" type="Religious Organization">
            Represented by past chair Rev. Chung Ok Lee, involved since the caucus's inception.
          </Member>
          <Member name="The World Peace Prayer Society" type="Peace Organization">
            Represented by past chair Deborah Moldow, who initiated the Coffee Series.
          </Member>
        </MemberSection>

        <MemberSection title="Coordinating Council Member Organizations">
          <Member name="Findhorn Foundation" type="Educational Organization">
            Represented on the Coordinating Council by Frances Edwards.
          </Member>
          <Member name="International Federation of Women in Legal Careers" type="Professional Organization">
            Represented on the Coordinating Council by Denise Scotto.
          </Member>
          <Member name="CCC/UN" type="NGO">
            Represented on the Coordinating Council by Jerry Spivack.
          </Member>
        </MemberSection>

        <MemberSection title="Contributing Organizations">
          <Member name="Millennium World Peace Summit" type="Peace Organization">
            Led by Bawa Jain, past co-chair of the Values Caucus.
          </Member>
          <Member name="Center for Psychological and Social Change" type="Research Organization">
            Represented by Dr. Nancy Roof, founding co-chair of the Values Caucus.
          </Member>
          <Member name="United Religions Initiative" type="Interfaith Organization">
            Co-sponsor of various Values Caucus events and programs.
          </Member>
          <Member name="Maryknoll" type="Religious Organization">
            Active participant in Values Caucus discussions and events.
          </Member>
          <Member name="Congregations of St. Joseph" type="Religious Organization">
            Participated in major Values Caucus events including the 10th Anniversary celebration.
          </Member>
        </MemberSection>

        <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
            Complete Member List
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-400">
            The Values Caucus has been honored to work with numerous other organizations over the years. A comprehensive list of all organizations that have participated in Values Caucus activities is available upon request.
          </p>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
            If your organization would like to learn more about participating in the Values Caucus, please contact us at <a href="mailto:valuescaucus@valuescaucus.org" className="text-teal-500 hover:text-teal-600 dark:hover:text-teal-400">valuescaucus@valuescaucus.org</a>.
          </p>
        </div>
      </div>
    </SimpleLayout>
  )
}

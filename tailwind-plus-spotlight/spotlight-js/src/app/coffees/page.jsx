import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

const coffeeGuests = {
  2011: [
    { name: 'H.E. Mr. Pablo Solon', country: 'The Plurinational State of Bolivia', date: '01/22/11 (rescheduled 06/23/11)' },
  ],
  2010: [
    { name: 'H.E. Mr. Lhatu Wangchuk', country: 'Kingdom of Bhutan', date: '10/14/10' },
    { name: 'Mr. Eric Falt', country: 'UN Department of Public Information', date: '05/06/10', title: 'Director, Outreach Division' },
    { name: 'Ms. Kate Burns', country: 'UN OCHA', date: '03/11/10', title: 'Senior Policy Advisor for Gender' },
    { name: 'H.E. Dr. Palitha T.B. Kohona', country: 'Sri Lanka', date: '02/25/10' },
  ],
  2009: [
    { name: 'H.E. Joyce Kafanabo', country: 'United Republic of Tanzania', date: '10/22/09', title: 'Minister Plenipotentiary' },
    { name: 'H.E. Mr. Adrian Neritani', country: 'Republic of Albania', date: '04/16/09' },
    { name: 'Mr. Shafqat Jalil', country: 'Islamic Republic of Pakistan', date: '03/19/09', title: 'Press Counsellor' },
    { name: 'H.E. Mr. Enriquillo A del Rosario Ceballos', country: 'Dominican Republic', date: '02/19/09' },
  ],
  2007: [
    { name: 'H.E. Mrs. Fekitamoeloa Utoikamanu', country: 'Kingdom of Tonga', date: '04/05/07' },
  ],
  2006: [
    { name: 'H.E. Mr. Crispin Grey-Johnson', country: 'The Gambia', date: '11/16/06' },
  ],
  2004: [
    { name: 'H.E. Dr. Augustine Mahiga', country: 'United Republic of Tanzania', date: '03/18/04' },
    { name: 'H.E. Mr. Jose Luis Guterres', country: 'Democratic Republic of Timor-Leste', date: '02/12/04' },
  ],
  2003: [
    { name: 'H.E. Miss. Yvonne Clark', country: 'Barbados', date: '03/13/03' },
  ],
  2002: [
    { name: 'H.E. Mr. Dumisani Shadrack Kumalo', country: 'South Africa', date: '11/07/02' },
    { name: 'H.E. Mr. Javad Zarif', country: 'Islamic Republic of Iran', date: '10/17/02', topic: 'Values in a Changing World' },
  ],
  2001: [
    { name: 'H.E. Mr. Juan Gabriel Valdes', country: 'Chile', date: '10/25/01' },
    { name: 'H.E. Ms. Madina B. Jarbussynova', country: 'Republic of Kazakhstan', date: '05/31/01', topic: 'Kazakhstan: 10 years of Independence' },
    { name: 'H.E. Ms. Marjatta Rasi', country: 'Finland', date: '05/17/01', topic: 'Globalization and the Wide Concept of Security' },
    { name: 'H.E. Sr. Jorge Eduardo Navarette', country: 'Mexico', date: '05/10/01' },
    { name: 'H.E. Miss M. Patricia Durrant', country: 'Jamaica', date: '05/03/01', topic: 'The Special Session of the General Assembly for Children' },
    { name: 'H.E. Mr. Percy Metsing Mangoaela', country: 'Lesotho', date: '04/12/01', topic: 'Information & Communications Technology' },
  ],
  2000: [
    { name: 'H.E. M. Marc Nteturuye', country: 'Burundi', date: '12/14/00' },
    { name: 'H.E. Sir Jeremy Greenstock, KCMG', country: 'United Kingdom', date: '11/16/00' },
    { name: 'H.E. Mr. Gelson Fonseca, Jr.', country: 'Brazil', date: '10/05/00' },
    { name: 'H.E. Mr. WANG Yingfan', country: 'People\'s Republic of China', date: '06/15/00' },
    { name: 'H.E. Mr. Volodymyr Yu. Yel\'Chenko', country: 'Ukraine', date: '06/08/00' },
    { name: 'H.E. M. Ahmed Snoussi', country: 'Morocco', date: '06/01/00' },
    { name: 'H.E. Dr. Ivan Simonovic', country: 'Croatia', date: '05/18/00', topic: 'Global Values in the Arena of Criminal Adjudication' },
    { name: 'H.E. Dr. Gerhard Pfanzelter', country: 'Austria', date: '05/04/00' },
    { name: 'H.E. Mr. Naste Calovski', country: 'FYR Macedonia', date: '04/13/00', topic: 'Cooperation and Integration in a Balkan State' },
    { name: 'H.E. Dr. Lamuel A. Stanislaus', country: 'Grenada', date: '03/30/00', topic: 'The Concerns of a Tri-Island State' },
    { name: 'H.E. M. Hubert Wurth', country: 'Luxembourg', date: '03/23/00', topic: 'A Small State with a Large Role in the EU and the UN' },
    { name: 'H.E. Mr. Martin Andjaba', country: 'Namibia', date: '03/02/00', topic: 'Namibia and the United Nations' },
  ],
  1999: [
    { name: 'H.E. Mr. Elfatih Mohamed Ahmed Erwa', country: 'Sudan', date: '10/14/99', topic: 'Sudan: Perception and Reality' },
    { name: 'H.E. Sr. Bruno Rodriguez Parrillo', country: 'Cuba', date: '06/10/99', topic: 'Cuban-American Relations' },
    { name: 'H.E. Sr. Gert Rosenthal', country: 'Guatemala', date: '04/08/99', topic: 'The Guatemalan Peace Process and the International Financial Systems' },
    { name: 'H.E. Sr. Roberto Jordán-Pando', country: 'Bolivia', date: '03/25/99', topic: 'Bolivia: Financing Sustainable Human Development' },
    { name: 'H.E. Mr. Anwarul Karim Chowdhury', country: 'Bangladesh', date: '03/18/99', topic: 'Building A Culture of Peace' },
    { name: 'H.E. Mr. Vulkan Vural', country: 'Turkey', date: '02/25/99', topic: 'Turkey\'s Unique Blend of Values: East Meets West' },
    { name: 'H.E. Mr. Eugeniusz Wyzner', country: 'Republic of Poland', date: '01/14/99', topic: 'Poland: Difficult Past, Promising Future' },
  ],
  1998: [
    { name: 'H.E. Prof. M.M. Mulumba Semakula Kiwanuka', country: 'Republic of Uganda', date: '10/29/98', topic: 'Building a Culture of Shared Values' },
    { name: 'H.E. Mme. Mahawa Bangoura Camara', country: 'Guinea', date: '05/28/98', topic: 'Hospitality and Friendship in a Developing Democracy' },
    { name: 'H.E. M. Jenö C.A. Staehelin', country: 'Switzerland', date: '05/07/98', topic: 'The Value of Neutrality' },
    { name: 'H.E. Mr. Philip Dimitrov', country: 'Republic of Bulgaria', date: '03/26/98', topic: 'Bulgaria: Past, Present & Future' },
    { name: 'H.E. Mr. Kamalesh Sharma', country: 'India', date: '03/12/98', topic: 'India\'s Values' },
    { name: 'H.E. Mr. Daudi Ngelautwa Mwakawago', country: 'United Republic of Tanzania', date: '02/19/98', topic: 'Tanzania: Island of Peace on a Continent of Struggle' },
    { name: 'H.E. Dr. Makarim Wibisono', country: 'Republic of Indonesia', date: '02/05/98', topic: 'Indonesia: A Land of Unity in Diversity' },
  ],
  1997: [
    { name: 'H.E. Mr. Michael John Powles', country: 'New Zealand', date: '11/20/97', topic: 'Values & Realpolitik: A Small State\'s Experience' },
    { name: 'H.E. M. Pierre Lelong', country: 'Haiti', date: '11/06/97', topic: 'Haiti: A Republic Past and Present' },
    { name: 'H.E. Sr. Ricardo G. Castaneda-Cornejo', country: 'El Salvador', date: '10/23/97', topic: 'El Salvador After the Peace Agreement' },
    { name: 'H.E. Dr. Nabil A. Elaraby', country: 'Arab Republic of Egypt', date: '10/09/97', topic: 'Values in Egyptian Foreign Policy' },
    { name: 'H.E. Ms. Zamira B. Eshmambetova', country: 'Kyrgyz Republic', date: '06/05/97', topic: 'Challenges for Values in Countries in Transition' },
    { name: 'H.E. Mr. Machivenyika T. Mapuranga', country: 'Zimbabwe', date: '05/22/97', topic: 'Zimbabwe\'s Challenges and Changing Values' },
    { name: 'H.E. Mrs. Claudia Fritsche', country: 'Principality of Liechtenstein', date: '05/08/97', topic: 'Maintaining Identity in a Changing Europe' },
  ],
}

export const metadata = {
  title: 'Coffee Series',
  description: 'Informal dialogues between UN Ambassadors and NGOs, fostering understanding and collaboration.',
}

export default function Coffees() {
  const years = Object.keys(coffeeGuests).sort((a, b) => b - a)

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
            Complete Guest List
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-400 mb-8">
            Since 1997, the Values Caucus has been honored to host numerous ambassadors and UN representatives from around the world. Below is the complete chronological list of all our distinguished guests.
          </p>

          {years.map((year) => (
            <div key={year} className="mb-12">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-6 pb-2 border-b border-zinc-200 dark:border-zinc-700">
                {year}
              </h3>
              <div className="space-y-6">
                {coffeeGuests[year].map((guest, index) => (
                  <div
                    key={`${year}-${index}`}
                    className="rounded-lg border border-zinc-200 dark:border-zinc-700 p-4 bg-white dark:bg-zinc-800/50"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                          {guest.name}
                        </h4>
                        {guest.title && (
                          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                            {guest.title}
                          </p>
                        )}
                        <p className="text-sm font-medium text-teal-600 dark:text-teal-400 mt-1">
                          {guest.country}
                        </p>
                        {guest.topic && (
                          <p className="text-sm italic text-zinc-600 dark:text-zinc-400 mt-2">
                            "{guest.topic}"
                          </p>
                        )}
                      </div>
                      <div className="text-xs text-zinc-500 dark:text-zinc-500 ml-4">
                        {guest.date}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
            Coffee Books Archive
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-400">
            The Values Caucus has maintained detailed records of our Coffee Series meetings over the years. These "Coffee Books" contain summaries and insights from each ambassador's visit, preserving valuable discussions on values, international relations, and cooperation between UN missions and NGOs.
          </p>
          <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
            Coffee Books are available by year (1997-2011), documenting meetings from the inception of the series. For access to these archives, please contact the Values Caucus at <a href="mailto:valuescaucus@valuescaucus.org" className="text-teal-500 hover:text-teal-600 dark:hover:text-teal-400">valuescaucus@valuescaucus.org</a>.
          </p>
        </div>
      </div>
    </SimpleLayout>
  )
}

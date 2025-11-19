import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function EventSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Event({ title, description, date, location }) {
  return (
    <Card as="article">
      <Card.Title as="h3">
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{date}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      {location && (
        <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
          <strong>Location:</strong> {location}
        </p>
      )}
    </Card>
  )
}

export const metadata = {
  title: 'Events',
  description:
    'Values Caucus events, community discussions, and special gatherings at the United Nations.',
}

export default function Events() {
  return (
    <SimpleLayout
      title="Events and Community Discussions"
      intro="The Values Caucus initiates and participates in numerous activities at the United Nations. We generally meet the first Thursday of each month from 1:15 to 2:45PM in conference rooms at UN Headquarters. These meetings usually consist of an invited speaker and business matters. We also hold Community Discussions and co-sponsor events with other NGOs."
    >
      <div className="space-y-20">
        <EventSection title="Recent Events (2012-2017)">
          <Event
            title="CSW61 Community Discussion: The Value of Work"
            description="The theme of this year's CSW is Women's Economic Empowerment In The Changing World of Work. We explored what work means to us, how we can create environments that allow workers to flourish, and whether workplaces can honor creativity and bring workers joy."
            date="Friday, March 17, 2017"
            location="Baha'i Offices, 866 UN Plaza, Lobby 120"
          />
          <Event
            title="Standup For Dignity: Human Rights, Spiritual Rights"
            description="BK Jayanti Kirpalani, the Regional Coordinator of the Brahma Kumaris in the UK and Europe, was the special guest speaker. The afternoon honored the UN's Human Rights Day with deep insights on dignity and human rights."
            date="Thursday, December 8, 2016"
            location="Baha'i Offices, 866 UN Plaza, Lobby 120"
          />
          <Event
            title="Israeli Women's Leadership Forum"
            description="A vibrant group of 30 Israeli women representing the Israeli Women's Leadership Forum had an engaging discussion with influential women representing various NGOs including Values Caucus at the UN, Commission on the Status of Women, Bahai's International, WINWIN, and International Federation of Women Lawyers."
            date="Tuesday, November 22, 2016"
            location="Baha'i Offices, 866 UN Plaza, Lobby 120"
          />
          <Event
            title="CSW60 Community Discussion"
            description="During CSW, women from all over the world gather to express their experiences on the status of women. Our space was a place to cultivate together each other's learning – perhaps to emerge something new!"
            date="Thursday, March 17, 2016"
            location="Baha'i Offices, 866 UN Plaza, Lobby 120"
          />
          <Event
            title="Valuing Youth Contributions to the Advancement of Women"
            description="Special guest: United Nations Envoy on Youth, Ahmad Alhendawi, as we explored youth contributions to the advancement of women in the UN's Post 2015 Agenda and how we can support their efforts. Annual CSW Community Discussion."
            date="Friday, March 21, 2014"
            location="Baha'i Offices, 866 UN Plaza, Lobby 120"
          />
          <Event
            title="The Journey Begins: Healing From Sexual Domestic Violence"
            description="A 16 Days of Activism Against Gender-Based Violence Campaign Event. We screened Ping Chong's documentary 'Secret Survivors: Using Theatre to Break the Silence' and explored healing from child sexual abuse."
            date="Thursday, December 5, 2013"
            location="Baha'i Offices, 866 UN Plaza, Lobby 120"
          />
          <Event
            title="Exploring the Future We Want: A Values-Based Conversation relating to Rio+20"
            description="A multi-stakeholder conversation to explore the ecological and sustainable development future we want, and how to get there. Co-hosted with the NGO Working Group on Climate Change."
            date="Wednesday, May 30, 2012"
            location="2 UN Plaza, UNEP 8th Floor Conference Room DC2-803"
          />
        </EventSection>

        <EventSection title="Notable Events (2002-2011)">
          <Event
            title="Managing for a New Future by Managing FOR Values"
            description="Professor James Hoopes, Murata Professor of Ethics in Business at Babson College, explored how Values, law and management can sometimes conflict with, but also offer opportunities for, new directions both here and abroad."
            date="Thursday, October 6, 2011"
            location="Baha'i Offices, 866 UN Plaza, Lobby 120"
          />
          <Event
            title="Ecological Consciousness: Growing a Good Green Economy"
            description="In partnership with The Climate Change Working Group, featuring Mohammad Reza Salamat (Program Coordinator for the S.G.'s Special Advisory Group on Climate Change), John T. Brinkman (Maryknoll NGO Representative), and Dr. Tariqu Banuri (Director of the Division of Sustainable Development)."
            date="Wednesday, May 4, 2011"
            location="Baha'i Offices, 866 UN Plaza, Lobby 120"
          />
          <Event
            title="Where Do We Go After Fukushima? Climate Change and Nuclear Power"
            description="A discussion and viewing of the documentary film 'Living with Chernobyl: and the Future of Nuclear Power,' addressing the predecessor tragedy and its lessons."
            date="Thursday, April 14, 2011"
            location="Baha'i Offices, 866 UN Plaza, Lobby 120"
          />
          <Event
            title="Harmonizing Our Vision of the Future: World Interfaith Harmony Week"
            description="The Values Caucus explored the concept of Harmony and discussed the challenges that a diversity of expressions can bring during the Official UN World Interfaith Harmony Week."
            date="Tuesday, February 1, 2011"
            location="Baha'i Offices, 866 UN Plaza, Lobby 120"
          />
          <Event
            title="Many Species. One Planet. One Future"
            description="William J. Snape, Senior Counsel at The Center for Biological Diversity and Legal Fellow at American University Law School, provided an opportunity to learn more about biodiversity issues."
            date="Thursday, June 3, 2010"
            location="2 UN Plaza, UNEP 8th Floor Conference Room DC2-803"
          />
          <Event
            title="The 16 Days Campaign: Taking Action Against Gender Violence"
            description="In partnership with the NGO Committee on the Status of Women, Violence Against Women Subcommittee. We learned about UN Initiatives towards ending Violence Against Women and heard from Spoken Word Artists including Kevin Powell, Veronique Harvey, Zera Priestess, and Kimberly McCrae."
            date="Wednesday, December 2, 2009"
            location="Baha'i Offices, 866 UN Plaza, Lobby 120"
          />
          <Event
            title="Evolution and the Global Integrity Crisis"
            description="Presented by Rev. Michael Dowd, who proposed that the lack of an evolutionary worldview made the current crisis inevitable and that a deep-time view of human nature, values, and social systems provides a clear and inspiring way forward."
            date="Thursday, April 2, 2009"
            location="Baha'i Offices, 866 UN Plaza, Lobby 120"
          />
          <Event
            title="The Value of Non-Violence"
            description="In Commemoration of the International Day of Non-Violence. Presented by Marianne H. Perez, Educator & Peace-Builder, who organized roundtables and wrote a position paper on proven, effective violence prevention and conflict transformation techniques."
            date="Thursday, October 2, 2008"
            location="Baha'i Offices, 866 UN Plaza, Lobby 120"
          />
          <Event
            title="Children's Concert for Peace: Mizero Children of Rwanda"
            description="A performance of traditional Rwandan dance and drumming given by youth from Rwanda using music and dance to heal their lives after the 1994 genocide. Featuring Jean Paul Samputu."
            date="Wednesday, December 19, 2007"
            location="Wish Pearl World, 246 W. 38th St., Between 7th and 8th Ave, New York City"
          />
          <Event
            title="Mapping Perspectives in the Middle East"
            description="Presented by Rafael Nasser, a member of the Center for Human Emergence, who offered an analysis of the crisis between Israel and Palestine using Spiral Dynamics as a road map."
            date="Thursday, February 22, 2007"
            location="Baha'i Offices, 866 UN Plaza, Lobby 120"
          />
          <Event
            title="A New Vision & Adventure for the UN of the 21st Century"
            description="A Values Discussion with Dr. Jean Houston exploring how the UN can learn to discover the art of creating self-reliant community in a global age through politeia – a civic society carried to its utmost."
            date="Thursday, November 2, 2006"
            location="United Nations Headquarters, Conference Room TBD"
          />
        </EventSection>

        <EventSection title="Special Milestones">
          <Event
            title="The Spirit of the United Nations: Markings for the Future"
            description="On the occasion of the 60th Anniversary of the United Nations and the 100th Anniversary of the birth of Dag Hammarskjöld, the second Secretary-General of the UN. This celebration filled Conference Room 3 to capacity with over 650 people, featuring video montages, dance, song, reflection, and presentations from Mr. Shashi Tharoor (Under-Secretary-General, UN Communications and Public Information) and H.E. Mr. Jan Eliasson (President of the 60th Session of the UN General Assembly)."
            date="Thursday, October 27, 2005"
            location="United Nations Headquarters, Conference Room 3"
          />
          <Event
            title="10th Anniversary of the Values Caucus"
            description="The Ethical & Spiritual Dimensions of the Millennium Development Goals. Featured speakers: Alfredo Sfeir-Younis from the World Bank and Carol Zinn, SSJ from Congregations of St. Joseph. The meeting celebrated the Values Caucus's first decade of service, with more than 60 members of the UN non-governmental community attending."
            date="Thursday, February 12, 2004"
            location="United Nations Headquarters, Conference Room E"
          />
          <Event
            title="The Role of Values in the Future of the United Nations"
            description="A rare conversation with Shashi Tharoor, Under-Secretary-General for Communications and Public Information, touching on his personal sense of mission, ideals and commitments, both as an individual and in his capacity as Under-Secretary General."
            date="Thursday, April 3, 2003"
            location="United Nations Headquarters, Conference Room 1"
          />
        </EventSection>
      </div>
    </SimpleLayout>
  )
}

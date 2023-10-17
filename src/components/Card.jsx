import styling from "styled-components";

const CardWrapper = styling.div`
  width: 35rem;
  display: flex;
  flex-direction: column;
  border-radius: 2rem;
  background-color: #fff;
  margin: 2rem;
`;

const ImageContainer = styling.div`
  width: 100%;
  height: 20rem;
`;

const Picture = styling.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 2rem 2rem 0 0;
`;

const InformationContainer = styling.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CardTitle = styling.h3`
  font-size: 2.5rem;
  font-weight: 700;
`;

const Ratings = styling.p`
  display: flex;
  gap: 1rem;
`;

const SecondaryText = styling.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SecondaryTextTitle = styling.h4`
  font-size: 1.5rem;
  font-weight: 500;
`;

const SecondaryTextParagraph = styling.p`
  font-size: 1.3rem;
  font-weight: 300;
`;

const SeparationLine = styling.div`
  width: 70%;
  height: 0.1px;
  background-color: #000;
  align-self: center;
`;

const Subtitle = styling.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SubtitleTitle = styling.h4`
  font-size: 1.8rem;
  font-weight: 600;
`;

const SubtitleList = styling.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-self: center;
`;

const SubtitleListItem = styling.li`
  font-size: 1.2rem;
  font-weight: 500;
  background-color: hsla(0, 0%, 79%, 0.28);
  padding: 1rem;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SubtitleListItemParagraph = styling.p`
  text-align: center;
`;

const CTA = styling.button`
  display: flex;
  width: fit-content;
  padding: 0.8rem;
  border: none;
  border-radius: 1rem;
  background-color: #767676;
  color: #fff;
  font-family: var(--fontFam);
  font-weight: 700;
  align-self: center;
`;


const Card = () => {
  return (
    <CardWrapper>
      <ImageContainer>
        <Picture
          src="https://images.pexels.com/photos/689451/pexels-photo-689451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="An image"
        />
      </ImageContainer>
      <InformationContainer>
        <CardTitle>Everest (Nepal / Tibet)</CardTitle>
        <Ratings>
          <sup>⭐⭐⭐⭐</sup> <span>4 (2000)</span>
        </Ratings>
        <SecondaryText>
          <SecondaryTextTitle>Mountains</SecondaryTextTitle>
          <SecondaryTextParagraph>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum quae
            nihil modi qui ullam unde?
          </SecondaryTextParagraph>
        </SecondaryText>
        <SeparationLine></SeparationLine>
        <Subtitle>
          <SubtitleTitle>Other mountains</SubtitleTitle>
          <SubtitleList>
            <SubtitleListItem>
              <SubtitleListItemParagraph>
                Mount Fuji (Japan)
              </SubtitleListItemParagraph>
            </SubtitleListItem>
            <SubtitleListItem>
              <SubtitleListItemParagraph>
                Mount Kilimanjaro (Tanzania)
              </SubtitleListItemParagraph>
            </SubtitleListItem>
            <SubtitleListItem>
              <SubtitleListItemParagraph>
                Mount K2 (Pakistan / China)
              </SubtitleListItemParagraph>
            </SubtitleListItem>
            <SubtitleListItem>
              <SubtitleListItemParagraph>
                Denali (Alaska)
              </SubtitleListItemParagraph>
            </SubtitleListItem>
          </SubtitleList>
        </Subtitle>
        <CTA>Take a hike</CTA>
      </InformationContainer>
    </CardWrapper>
  );
};

export default Card;

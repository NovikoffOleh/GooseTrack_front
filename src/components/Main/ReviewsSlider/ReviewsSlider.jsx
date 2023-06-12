import Container from 'utils/Container';
import {
  AuthorPhoto,
  AuthorRating,
  AuthorReview,
  AuthorTitle,
  AuthorTop,
  AuthorTopRight,
  ReviewsItem,
  ReviewsList,
  ReviewsTitle,
  SliderWrapper,
  SliderLeft,
  SliderRight,
  Wrapper,
} from './ReviewsSlider.styled';
import olena from 'images/others/mobile/images-2.jpg';
import alexander from 'images/others/mobile/images-3.jpg';
import { ReactComponent as Star } from 'images/svg/rating-star.svg';

export const ReviewsSlider = () => {
  return (
    <Container>
      <Wrapper>
        <ReviewsTitle>Reviews</ReviewsTitle>
        <ReviewsList>
          <ReviewsItem>
            <AuthorTop>
              <AuthorPhoto src={olena} alt="Олена Павленко"></AuthorPhoto>
              <AuthorTopRight>
                <AuthorTitle>Олена Павленко</AuthorTitle>
                <AuthorRating>
                  <Star width={14} height={14} fill="#CEC9C1" />
                  <Star width={14} height={14} fill="#FFAC33" />
                  <Star width={14} height={14} fill="#FFAC33" />
                  <Star width={14} height={14} fill="#FFAC33" />
                  <Star width={14} height={14} fill="#FFAC33" />
                </AuthorRating>
              </AuthorTopRight>
            </AuthorTop>
            <AuthorReview>
              GooseTrack is impressive, the calendar view and filter options
              make it easy to stay organized and focused. Highly recommended.
            </AuthorReview>
          </ReviewsItem>
          <ReviewsItem>
            <AuthorTop>
              <AuthorPhoto
                src={alexander}
                alt="Олександр Руденко "
              ></AuthorPhoto>
              <AuthorTopRight>
                <AuthorTitle>Григорій Руденко </AuthorTitle>
                <AuthorRating>
                  <Star width={14} height={14} fill="#CEC9C1" />
                  <Star width={14} height={14} fill="#FFAC33" />
                  <Star width={14} height={14} fill="#FFAC33" />
                  <Star width={14} height={14} fill="#FFAC33" />
                  <Star width={14} height={14} fill="#FFAC33" />
                </AuthorRating>
              </AuthorTopRight>
            </AuthorTop>
            <AuthorReview>
              GooseTrack is incredibly helpful, the sidebar with account
              management, calendar, and filter options make navigation seamless.
              Great for staying organized.
            </AuthorReview>
          </ReviewsItem>
        </ReviewsList>
        <SliderWrapper>
          <SliderLeft />
          <SliderRight />
        </SliderWrapper>
      </Wrapper>
    </Container>
  );
};

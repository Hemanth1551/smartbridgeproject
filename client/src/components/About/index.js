import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  background: linear-gradient(to bottom right, #f8f9fa, #e9ecef);
  padding: 60px 0;
`;

const StyledBox = styled.div`
  background-color: white;
  border-radius: 16px;
  padding: 40px 30px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  max-width: 800px;
  margin: auto;
`;

const Heading = styled.h2`
  font-size: 2.2rem;
  color: #0d6efd;
  font-weight: 700;
  margin-bottom: 24px;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  color: #495057;
  line-height: 1.7;
  margin-bottom: 20px;
`;

const About = () => {
    return (
        <AboutContainer>
            <div className="container">
                <StyledBox>
                    <Heading>About Us</Heading>
                    <Paragraph>
                        Welcome to <strong>GroceryMart</strong> – your one-stop destination for fresh and
                        quality groceries. We are dedicated to providing you with the finest
                        selection of products to make your shopping experience convenient and
                        enjoyable.
                    </Paragraph>
                    <Paragraph>
                        Our journey began in 2005, and since then, we've been committed to
                        serving our customers with the freshest produce, pantry essentials,
                        and more. With a passion for quality and customer satisfaction, we
                        ensure that every item you find on our shelves meets the highest
                        standards.
                    </Paragraph>
                    <Paragraph>
                        Whether you're looking for everyday groceries, special ingredients for
                        your favorite recipes, or unique items for a special occasion – we've
                        got you covered. Shop with us and experience the joy of quality
                        groceries at your doorstep.
                    </Paragraph>
                </StyledBox>
            </div>
        </AboutContainer>
    );
};

export default About;

import { Page, Layout, Text, BlockStack, InlineStack, Box } from "@shopify/polaris";
import { Link } from "react-router"; 

export default function Welcome() {
  return (
    <Page title="Thumb-Zone Nav"> {/* Clean Title */}
      
      {/* 1. Custom Styles for that "Pro" Landing Page Look */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

        /* Global Font Reset for this page */
        .pro-welcome-container {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          color: #4B5563;
        }

        /* The "Float" Card */
        .pro-card {
          background: white;
          border-radius: 16px;
          padding: 48px;
          box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.1); /* Soft, deep shadow */
          border: 1px solid #E5E7EB;
        }

        /* Vibrant CTA Button */
        .vibrant-button {
          background: linear-gradient(135deg, #5c6ac4 0%, #4f46e5 100%);
          color: white;
          font-weight: 600;
          padding: 16px 32px;
          border-radius: 12px; /* Smooth rounded corners */
          text-decoration: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          display: inline-block;
          border: none;
          font-size: 16px;
        }
        .vibrant-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px -5px rgba(79, 70, 229, 0.4);
          color: white;
          text-decoration: none;
        }

        /* Ghost Button (Secondary) */
        .ghost-button {
          color: #6B7280;
          font-weight: 500;
          padding: 16px 24px;
          border-radius: 12px;
          text-decoration: none;
          border: 1px solid transparent;
          transition: all 0.2s;
        }
        .ghost-button:hover {
          color: #111827;
          background: #F3F4F6;
          text-decoration: none;
        }

        /* CSS-Only iPhone Mockup Frame */
        .phone-frame {
          width: 280px;
          height: 560px;
          background: #000;
          border-radius: 40px;
          padding: 12px; /* Bezel thickness */
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          margin: 0 auto;
          position: relative;
        }
        .phone-screen {
          width: 100%;
          height: 100%;
          background: #fff;
          border-radius: 32px;
          overflow: hidden;
          position: relative;
          
          /* PLACEHOLDER BACKGROUND - Replace URL with your screenshot later */
          background-image: url('https://placehold.co/256x536/f3f4f6/a1a1aa.png?text=App+Screenshot+Here');
          background-size: cover;
          background-position: center;
        }
        /* The Notch */
        .phone-notch {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 120px;
          height: 25px;
          background: #000;
          border-bottom-left-radius: 16px;
          border-bottom-right-radius: 16px;
          z-index: 10;
        }
        
        /* Gradient Background Wrapper */
        .gradient-bg {
           background: linear-gradient(180deg, #eff6ff 0%, #ffffff 100%);
           border-radius: 20px;
           padding: 40px 0;
        }
      `}</style>

      <div className="pro-welcome-container">
        <Layout>
          {/* HEADER SECTION */}
          <Layout.Section>
            <Box paddingBlockEnd="800" paddingBlockStart="400">
               <BlockStack align="center" inlineAlign="center" gap="400">
                  <Text as="h1" variant="heading2xl" alignment="center" fontWeight="bold">
                     Welcome to Thumb-Zone Nav 🚀
                  </Text>
                  <Text as="p" variant="bodyLg" tone="subdued" alignment="center">
                     Boost your mobile conversions with one-handed navigation.
                  </Text>
               </BlockStack>
            </Box>
          </Layout.Section>

          {/* MAIN PRO CARD */}
          <Layout.Section>
            <div className="pro-card">
              
              <BlockStack gap="800">
                
                {/* 2. SPLIT LAYOUT: Left Text, Right Phone */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }}>
                    
                    {/* LEFT COLUMN: Copy & Actions */}
                    <BlockStack gap="600">
                        <BlockStack gap="400">
                          <Text as="h2" variant="headingXl" fontWeight="bold">
                            Stop making thumbs stretch.
                          </Text>
                          
                          {/* Constraint width for readability */}
                          <div style={{ maxWidth: '450px' }}>
                            <Text as="p" variant="bodyLg" tone="subdued">
                              75% of users browse with one hand. Traditional top menus are hard to reach. 
                              <b> Thumb-Zone Nav</b> moves key links to the bottom, right where the thumb rests naturally.
                            </Text>
                          </div>
                        </BlockStack>

                        <InlineStack gap="300" align="start" blockAlign="center">
                            {/* UPGRADED CTA BUTTON */}
                            <Link to="/app" className="vibrant-button">
                               Go to Dashboard & Enable
                            </Link>

                            {/* GHOST BUTTON */}
                            <a href="https://waitlist.sh" target="_blank" rel="noreferrer" className="ghost-button">
                               Read the Science
                            </a>
                        </InlineStack>
                    </BlockStack>

                    {/* RIGHT COLUMN: Phone Mockup */}
                    <div className="gradient-bg">
                        <div className="phone-frame">
                            <div className="phone-notch"></div>
                            <div className="phone-screen">
                                {/* To put your REAL app screenshot here:
                                   1. Take a screenshot of your app on mobile.
                                   2. Upload it to your public/ folder or an image host.
                                   3. Update the background-image URL in the <style> block above.
                                */}
                            </div>
                        </div>
                    </div>

                </div>
              </BlockStack>
            </div>
          </Layout.Section>
        </Layout>
      </div>
    </Page>
  );
}
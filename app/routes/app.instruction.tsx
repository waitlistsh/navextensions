import { Page, Layout, Card, BlockStack, Text, List, InlineStack, Box } from "@shopify/polaris";

export default function Instruction() {
  return (
    <Page title="How to Use & The Science">
      <Layout>
        {/* SECTION 1: THE SCIENCE */}
        <Layout.Section>
          <Card>
            <BlockStack gap="500">
              <Text as="h2" variant="headingLg">Why the "Thumb Zone" Matters</Text>
              <BlockStack gap="400">
                <Text as="p" variant="bodyLg">
                  Steven Hoober’s research on mobile usage found that <b>75% of users touch the screen with only one thumb</b>.
                </Text>
                <Text as="p" variant="bodyLg">
                  The top of the screen is the "Stretch Zone"—it's hard to reach and causes friction. 
                  The bottom of the screen is the <b>"Natural Zone."</b> By placing your navigation here, you reduce friction and increase conversion rates.
                </Text>
                
                <Box background="bg-surface-secondary" padding="400" borderRadius="200">
                    <InlineStack gap="400" align="start">
                        <div style={{fontSize: '24px'}}>👍</div>
                        <BlockStack gap="200">
                            <Text as="h3" variant="headingMd" fontWeight="bold">The Result</Text>
                            <Text as="p">Stores using bottom navigation see an average <b>15-20% increase</b> in pages per session.</Text>
                        </BlockStack>
                    </InlineStack>
                </Box>
              </BlockStack>
            </BlockStack>
          </Card>
        </Layout.Section>

        {/* SECTION 2: HOW TO CUSTOMIZE */}
        <Layout.Section>
          <Card>
            <BlockStack gap="500">
              <Text as="h2" variant="headingLg">Customization Guide</Text>
              <List type="number">
                <List.Item>
                    <BlockStack gap="100">
                        {/* ADDED 'as="span"' TO FIX THE ERROR */}
                        <Text as="span" fontWeight="bold">Open the Theme Editor</Text>
                        <Text as="span" tone="subdued">Go to Dashboard and click "Open Theme Editor".</Text>
                    </BlockStack>
                </List.Item>
                <List.Item>
                    <BlockStack gap="100">
                        <Text as="span" fontWeight="bold">Change Colors</Text>
                        <Text as="span" tone="subdued">Click the "Thumb-Zone Nav" block. You can set the Background, Icon Color, and Active Color.</Text>
                    </BlockStack>
                </List.Item>
                <List.Item>
                     <BlockStack gap="100">
                        <Text as="span" fontWeight="bold">Choose Your Links</Text>
                        <Text as="span" tone="subdued">By default, we show Home, Search, Cart, and Account. You can toggle these on/off in the sidebar.</Text>
                    </BlockStack>
                </List.Item>
              </List>
            </BlockStack>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
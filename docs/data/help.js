const allArticles=[
['Getting Started','What is BG Wallet?','BG Wallet is a digital asset lifestyle product designed to connect asset management, supported transfers, everyday spending and travel connectivity. Explore the product pages, then use the Download App page to check download availability.'],
['Getting Started','Can I use my account on this website?','This phase-one website introduces BG Wallet. Registration, login, identity verification, card applications and asset operations are not available on the website.'],
['Wallet','Which assets can I hold?','This demo shows USDT, USDC, BTC and ETH as examples. Check the confirmed asset and network list in the BG Wallet app before transferring assets.'],
['Send & Receive','How do I choose the right network?','Confirm that the asset and network shown by the sending service match the receiving details. Do not send assets using a different network. The addresses and QR areas in this demo are placeholders and cannot receive funds.'],
['Send & Receive','Why is my transaction still pending?','Transaction status depends on network confirmations and applicable checks. Review the transaction details in the app. Do not assume a transfer is complete until its status confirms completion.'],
['BG Card','Where is BG Card available?','Card availability depends on eligibility, region and applicable terms. Check the information provided in the app. This demo does not accept card applications.'],
['eSIM','Will an eSIM work on my phone?','Check that your device supports eSIM and meets the requirements of your chosen plan. Confirm destination coverage, installation and activation instructions before selecting a plan.'],
['eSIM','Where can I see my data usage?','The eSIM experience is designed to show data usage alongside destination and coverage details. Actual availability and plan details should be checked in the app.'],
['Security','How can I help protect my account?','Use available passkeys or two-factor authentication, review device and login activity, and pay attention to security notifications. Never share verification codes. Use the app’s support channel for account-specific concerns.'],
['Account','Where do I complete identity verification?','Complete required identity verification through the BG Wallet app when available. This website does not collect identity documents or provide web KYC.'],
['Compliance','Are all services available in every region?','No. Product availability, eligibility checks and applicable terms vary by jurisdiction. Review the Compliance page and check the app for service-specific information.'],
['Compliance','Where can I find fees?','Fees may depend on the service, network and region. The Fees page explains the categories. Review the actual fee in the app before confirming an operation.']];

export const articles=[...allArticles.filter(a=>a[0]!=='eSIM'),['eSIM · 二期服务','现在可以使用 eSIM 吗？','eSIM 已列入二期服务规划，一期暂不提供购买、激活或使用。官网界面用于说明规划方向，具体上线时间、目的地覆盖、设备要求与套餐内容待确认。']];

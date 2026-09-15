export const products=[
{id:'wallet',name:'Wallet',group:'Money',icon:'◫',tag:'Hold',title:'资产安心存放，\n日常清楚管理。',desc:'Securely hold and manage your digital assets.',body:'将受支持的数字资产集中存放，清楚查看余额、收款和交易记录，为下一步使用做好准备。'},
{id:'send-receive',name:'Send & Receive',group:'Money',icon:'↗',tag:'Move',title:'轻松收款，\n清楚掌握每笔转账。',desc:'Move supported digital assets with ease.',body:'接收 USDT 等受支持的数字资产，或向其他钱包发送资产。核对地址与网络，随时查看交易进度。'},
{id:'convert',name:'Convert',group:'Money',icon:'⇄',tag:'Exchange',title:'法币与加密货币，\n双向兑换。',desc:'用法币买入加密货币，或将加密货币兑换为法币。',body:'用法币买入加密货币，也可以将持有的加密货币兑换为法币。根据自己的需要选择兑换方向，确认费用与收付信息后再操作。'},
{id:'card',name:'BG Card',group:'Lifestyle',icon:'▱',tag:'Spend',title:'钱包里的资产，\n生活里的日常。',desc:'Bring your digital assets into everyday spending.',body:'通过 BG Card 连接数字资产与日常消费，从线上购物、到店支付，到旅途中的跨境消费。'},
{id:'esim',phase:2,name:'eSIM · 二期服务',group:'Lifestyle',icon:'⌁',tag:'Connect',title:'旅行到了哪，\n生活就连接到哪。',desc:'二期规划：旅行网络与流量管理，暂未上线。',body:'在 BG Wallet 中了解目的地 eSIM 服务、覆盖范围与流量用量，让出行少一件需要操心的事。'},
{id:'grow',name:'资产稳健增值',group:'理财服务',icon:'↗',tag:'稳健增值',title:'稳健增值，\n让资产更有规划。',desc:'了解活期与定期理财，按需安排资产。',body:'结合资金使用计划，了解活期与定期理财，在 App 内查看产品规则、持仓与收益记录。'},
{id:'borrow',name:'加密货币抵押借贷',group:'理财服务',icon:'◈',tag:'抵押借贷',title:'以资产作抵押，\n满足资金周转需要。',desc:'了解抵押借贷条件，按需获取资金。',body:'使用符合条件的加密资产作为抵押，了解可借额度、费用与还款要求，再根据资金需要作出决定。'}];
export const security=[['Passkeys','Sign in using a supported device and a passkey, reducing reliance on passwords.'],['Two-factor authentication','Add a second verification step to help protect account access.'],['Device management','Review devices associated with your account and recognize unfamiliar access.'],['Login activity','Review account access activity and look out for changes you do not recognize.'],['Identity verification','Identity verification and KYC checks apply where required for the service.'],['Risk monitoring','Risk checks and transaction monitoring help identify unusual activity.'],['Security notifications','Stay informed about account events and transaction status.']];

export const phaseOneProducts=products.filter(p=>p.phase!==2);

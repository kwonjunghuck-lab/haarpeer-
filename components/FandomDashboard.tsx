import React, { useRef } from 'react';
import { 
  TrendingUp, 
  Users, 
  Eye, 
  MessageCircle, 
  Heart, 
  MousePointerClick, 
  Target, 
  ArrowUpRight, 
  BadgeCheck, 
  BarChart3, 
  Share2, 
  Bookmark, 
  AlertCircle, 
  Zap, 
  Lock, 
  Search, 
  Layers, 
  Instagram, 
  ExternalLink, 
  Download, 
  User, 
  Magnet, 
  Repeat, 
  ShoppingBag, 
  Sparkles, 
  Quote, 
  Lightbulb, 
  MessageSquareText, 
  Crown, 
  Rocket,
  ScanFace,
  Microscope,
  BrainCircuit,
  GraduationCap
} from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

// Data for Charts
const audienceData = [
  { name: '여성', value: 91.2 },
  { name: '남성', value: 8.8 },
];
const COLORS = ['#7d4fde', '#e8e0fb'];

// Deep Dive Metrics Data Structure (Flexibility for different datasets)
const deepDiveMetrics = [
  {
    id: 1,
    icon: MessageCircle,
    mainValue: "110.2%",
    subValue: null,
    title: "댓글 대비 좋아요 비율",
    reasonTitle: "선정 이유",
    reason: "일반적인 인플루언서 마케팅에서 가장 보기 드문 현상으로, 단순 호감(Like)을 넘어선 **적극적 관여(Engagement)**를 의미합니다.",
    insightTitle: "Commerce Insight",
    insight: "댓글 > 좋아요는 팬들이 **\"친구 태그\", \"제품 질문\", \"고민 토로\"**를 하고 있다는 뜻입니다. 이는 구매 직전 단계의 '질의응답(Q&A)' 세션이 열려 있는 것과 같으므로 CS 창구 전략이 유효합니다."
  },
  {
    id: 2,
    icon: Eye,
    mainValue: "2.6x",
    subValue: "(조회 1.7만 vs 도달 0.65만)",
    title: "평균 영상 조회수 대비 도달 격차",
    reasonTitle: "선정 이유",
    reason: "조회수가 도달수보다 약 2.6배 높다는 것은, 한 명의 유저가 영상을 **평균 2회 이상 반복 시청**했음을 강력하게 시사합니다.",
    insightTitle: "Commerce Insight",
    insight: "단순 킬링타임이 아닌, 따라 하고 싶은 **'정보성/교육성'** 콘텐츠라는 증거입니다. 제품 사용법이나 변화 과정을 학습하며 구매 욕구가 급상승하는 효과를 기대할 수 있습니다."
  },
  {
    id: 3,
    icon: Target,
    mainValue: "91.2%",
    subValue: "(25-34세 33.7%)",
    title: "타깃 성별/연령 집중도",
    reasonTitle: "선정 이유",
    reason: "마케팅 예산 집행 시 **'타깃 로스(Target Loss)'**를 판단하는 핵심 지표입니다. 남성 비율이 극히 낮아 예산 낭비가 거의 없습니다.",
    insightTitle: "Commerce Insight",
    insight: "뷰티/패션 시장의 '큰손'인 밀레니얼/Z세대 여성이 과반입니다. 효능을 꼼꼼히 따지는 **'스마트 컨슈머'** 층으로, 채널의 논리적인 '검증 콘텐츠'와 완벽한 합(Fit)을 이룹니다."
  }
];

const FandomDashboard: React.FC = () => {
  // Refs for navigation scrolling
  const section1Ref = useRef<HTMLElement>(null);
  const section2Ref = useRef<HTMLElement>(null);
  const section3Ref = useRef<HTMLElement>(null);
  const section4Ref = useRef<HTMLElement>(null);
  const section5Ref = useRef<HTMLElement>(null);
  const section6Ref = useRef<HTMLElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      const yOffset = -140; // Offset for sticky header + sticky nav (approx 64px + 60px + buffer)
      const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: "핵심 지표", ref: section1Ref },
    { label: "종합 평가", ref: section2Ref },
    { label: "심층 분석", ref: section3Ref },
    { label: "구매 여정", ref: section4Ref },
    { label: "채널 장단점", ref: section5Ref },
    { label: "최종 결론", ref: section6Ref },
  ];

  return (
    <div className="pb-12">
      
      {/* Profile Header Section */}
      <div className="-mx-4 md:mx-0">
         <div className="bg-white md:rounded-t-2xl border border-slate-200 border-b-0 shadow-sm p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
               {/* Avatar - Changed to User Icon */}
               <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100">
                  <User className="text-slate-300 w-10 h-10 md:w-12 md:h-12" />
               </div>

               {/* Info */}
               <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                     <span className="bg-purple-50 text-purple-600 text-[11px] font-bold px-2 py-0.5 rounded">Beauty</span>
                     <span className="bg-slate-100 text-slate-600 text-[11px] font-bold px-2 py-0.5 rounded">Vlog</span>
                  </div>
                  <h1 className="text-2xl md:text-3xl font-bold text-slate-900 flex items-center gap-2 truncate">
                     haaarpeeer
                     <a 
                       href="https://www.instagram.com/haaarpeeer/" 
                       target="_blank" 
                       rel="noreferrer"
                       className="text-slate-400 hover:text-pink-500 transition-colors"
                     >
                       <Instagram size={20} />
                     </a>
                  </h1>
                  <p className="text-sm text-slate-500 mt-1 flex flex-wrap items-center gap-x-4 gap-y-1">
                     <span className="flex items-center gap-1">
                       Instagram: <span className="font-medium text-slate-700">@haaarpeeer</span>
                     </span>
                  </p>
                  
                  <div className="flex items-center gap-4 mt-3 text-sm">
                     <div>
                       <span className="font-bold text-slate-900 text-lg">3.5만</span>
                       <span className="text-slate-500 text-xs ml-1">팔로워</span>
                     </div>
                     <div className="w-px h-8 bg-slate-200"></div>
                     <div>
                       <span className="font-bold text-slate-900 text-lg">1.7만</span>
                       <span className="text-slate-500 text-xs ml-1">평균 조회수</span>
                     </div>
                  </div>
               </div>

               {/* Right Side: Commerce DNA */}
               <div className="hidden lg:flex items-center gap-6 mt-4 md:mt-0">
                  
                  {/* DNA Title */}
                  <div className="text-right">
                     <div className="flex items-center justify-end gap-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                       <Sparkles size={12} className="text-brand" /> Commerce DNA
                     </div>
                     <p className="text-sm font-logo font-bold text-slate-900 leading-tight">
                        <span className="text-brand">High-Involvement</span><br/>Beauty Solution
                     </p>
                  </div>

                  <div className="h-10 w-px bg-slate-200"></div>

                  <div className="flex gap-3">
                      {/* Card 1: Identity */}
                      <div className="group relative w-36 bg-white rounded-xl border border-slate-200 p-3 shadow-sm hover:shadow-md hover:border-brand/30 transition-all duration-300">
                          <div className="absolute left-0 top-3 bottom-3 w-1 bg-brand rounded-r-full"></div>
                          <div className="ml-2">
                             <div className="flex items-center gap-2 mb-1">
                                <Lightbulb size={12} className="text-brand" />
                                <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">Identity</span>
                             </div>
                             <p className="text-sm font-bold text-slate-800 leading-none mb-1">Problem Solver</p>
                             <p className="text-[10px] text-slate-500 font-medium">문제 해결형 전문가</p>
                          </div>
                      </div>

                      {/* Card 2: Action */}
                      <div className="group relative w-36 bg-white rounded-xl border border-slate-200 p-3 shadow-sm hover:shadow-md hover:border-blue-500/30 transition-all duration-300">
                          <div className="absolute left-0 top-3 bottom-3 w-1 bg-blue-500 rounded-r-full"></div>
                          <div className="ml-2">
                             <div className="flex items-center gap-2 mb-1">
                                <MessageCircle size={12} className="text-blue-500" />
                                <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">Action</span>
                             </div>
                             <p className="text-sm font-bold text-slate-800 leading-none mb-1">Active Inquiry</p>
                             <p className="text-[10px] text-slate-500 font-medium">능동적 질의응답</p>
                          </div>
                      </div>

                      {/* Card 3: Trigger */}
                      <div className="group relative w-36 bg-white rounded-xl border border-slate-200 p-3 shadow-sm hover:shadow-md hover:border-indigo-500/30 transition-all duration-300">
                          <div className="absolute left-0 top-3 bottom-3 w-1 bg-indigo-500 rounded-r-full"></div>
                          <div className="ml-2">
                             <div className="flex items-center gap-2 mb-1">
                                <BrainCircuit size={12} className="text-indigo-500" />
                                <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">Trigger</span>
                             </div>
                             <p className="text-sm font-bold text-slate-800 leading-none mb-1">Logical Persuasion</p>
                             <p className="text-[10px] text-slate-500 font-medium">논리적 설득 구조</p>
                          </div>
                      </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* Sticky Navigation Bar - Moved outside to be a sibling of sections for correct sticky behavior */}
      <div className="sticky top-16 z-40 -mx-4 md:mx-0">
         <div className="bg-white border border-slate-200 border-t-0 shadow-sm md:rounded-b-2xl px-6 md:px-8 overflow-x-auto no-scrollbar">
             <div className="flex gap-8 min-w-max">
                {navItems.map((item, idx) => (
                   <button 
                     key={idx}
                     onClick={() => scrollToSection(item.ref)}
                     className="py-4 text-sm font-medium text-slate-500 border-b-2 border-transparent hover:text-brand hover:border-brand hover:font-bold transition-all"
                   >
                     {item.label}
                   </button>
                ))}
             </div>
         </div>
      </div>

      {/* Content Sections */}
      <div className="space-y-12 mt-8">
        
        {/* I. Commerce KPI Dashboard */}
        <section ref={section1Ref} className="scroll-mt-40">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-brand text-white flex items-center justify-center font-bold font-logo">I</div>
            <h2 className="text-xl font-bold text-slate-800">커머스 핵심 지표 요약 (Commerce KPI Dashboard)</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* 1. Scale & Reach */}
            <div className="lg:col-span-12 bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-4 flex items-center gap-2">
                <BarChart3 size={16} /> 1. Scale & Reach (스케일 및 도달 효율)
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {[
                  { label: "총 팔로워 수", value: "3.5만명", sub: "성장률 13% (유입 지속)", color: "text-slate-900" },
                  { label: "유효 타깃 팔로워", value: "3,321명", sub: "비율 9.4%", color: "text-slate-900" },
                  { label: "평균 영상 조회수", value: "1.7만회", sub: "높은 오가닉 유입", color: "text-slate-900" },
                  { label: "구독자 대비 조회 효율", value: "48.6%", sub: "팔로워 절반 육박 시청", highlight: true },
                  { label: "콘텐츠당 예상 도달", value: "10,950명", sub: "조회수가 도달의 2.6배", color: "text-slate-900" },
                  { label: "유효 도달률", value: "195%", sub: "★ 바이럴 잠재력 보유", highlight: true, textClass: "text-green-600" },
                ].map((item, i) => (
                  <div key={i} className={`p-4 rounded-xl ${item.highlight ? 'bg-brand-50 border border-brand/20' : 'bg-slate-50 border border-slate-100'}`}>
                    <p className="text-xs text-slate-500 mb-1">{item.label}</p>
                    <p className={`text-xl font-bold ${item.textClass || 'text-slate-900'}`}>{item.value}</p>
                    <p className="text-[10px] text-slate-400 mt-1">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Audience Fit */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
               <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-4 flex items-center gap-2">
                <Target size={16} /> 2. Audience Fit (타깃 적합도)
              </h3>
              <div className="flex gap-6 items-center h-full">
                <div className="w-32 h-32 relative flex-shrink-0">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={audienceData} cx="50%" cy="50%" innerRadius={25} outerRadius={40} dataKey="value">
                        {audienceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-[10px] font-bold text-slate-600">
                    여성<br/>91.2%
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                   <div>
                     <div className="flex justify-between text-xs mb-1">
                       <span className="text-slate-500">Main Target (25-34세 여성)</span>
                       <span className="font-bold text-brand">33.7%</span>
                     </div>
                     <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                       <div className="bg-brand h-full rounded-full" style={{ width: '33.7%' }}></div>
                     </div>
                   </div>
                   <div>
                     <div className="flex justify-between text-xs mb-1">
                       <span className="text-slate-500">Core Seg. (18-34세 합산)</span>
                       <span className="font-bold text-slate-800">~60%</span>
                     </div>
                     <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                       <div className="bg-brand-300 h-full rounded-full" style={{ width: '60%' }}></div>
                     </div>
                     <p className="text-[10px] text-slate-400 mt-1">
                       * 실질 구매력과 트렌드 수용성 최상위 구간<br/>
                       * 한국어 100% (국내 배송/CS 용이)
                     </p>
                   </div>
                </div>
              </div>
            </div>

            {/* 3. Engagement & Conversion */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-4 flex items-center gap-2">
                <MousePointerClick size={16} /> 3. Engagement & Conversion Signal (참여 및 전환 신호)
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                <div className="bg-slate-50 p-3 rounded-lg text-center">
                   <p className="text-xs text-slate-400">Avg Likes</p>
                   <p className="font-bold text-lg text-slate-800">147 <span className="text-[10px] font-normal text-slate-400">(0.86%)</span></p>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg text-center">
                   <p className="text-xs text-slate-400">Avg Comments</p>
                   <p className="font-bold text-lg text-slate-800">162 <span className="text-[10px] font-normal text-slate-400">(0.95%)</span></p>
                </div>
                <div className="bg-brand-50 border border-brand/20 p-3 rounded-lg text-center col-span-2">
                   <p className="text-xs text-brand-600 font-bold uppercase">Comment / Like Ratio</p>
                   <p className="font-black text-2xl text-brand">110.2%</p>
                </div>
              </div>
              <div className="flex gap-4 text-xs text-slate-500 bg-slate-50 p-3 rounded-lg">
                 <div className="flex-1 border-r border-slate-200 pr-4">
                   <span className="font-bold text-slate-800">참여율(ER): 0.87%</span><br/>
                   수치는 낮아 보이나 댓글 비중이 높아 질적 가치 최상위
                 </div>
                 <div className="flex-1 pl-2">
                   <span className="font-bold text-slate-800">포맷 비중:</span> 숏폼 54% / 피드 45%<br/>
                   동적 시연과 정적 정보 전달의 균형
                 </div>
              </div>
            </div>

          </div>
        </section>

        {/* II. Comprehensive Commerce Evaluation */}
        <section ref={section2Ref} className="scroll-mt-40">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-brand text-white flex items-center justify-center font-bold font-logo">II</div>
            <h2 className="text-xl font-bold text-slate-800">종합 커머스 평가 및 핵심 특징</h2>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm border border-brand/20 overflow-hidden">
            {/* Top: Definition Quote */}
            <div className="p-8 md:p-10 border-b border-slate-100 relative">
              <Quote className="absolute top-6 left-6 text-brand/10 w-12 h-12 -z-0 transform -scale-x-100" />
              <div className="relative z-10 text-center max-w-3xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 leading-normal md:leading-snug">
                  “단순 시청을 넘어 <span className="text-brand">‘학습’과 ‘문의’가 폭발하는</span>,<br className="hidden md:block"/> 
                  고관여 2534 여성들의 뷰티 솔루션 연구소”
                </h3>
                <div className="inline-flex items-center gap-2 bg-brand-50 text-brand-700 px-4 py-1.5 rounded-full text-sm font-bold">
                  <Lightbulb size={16} className="text-brand" />
                  <span>Core Definition: Problem Solving Channel</span>
                </div>
                <p className="text-slate-500 text-sm mt-6 leading-relaxed">
                  이 채널은 단순히 예쁜 이미지를 소비하는 곳이 아니라, <strong className="text-slate-800">‘문제 해결(Problem Solving)’</strong>을 위한 정보 습득 채널로 기능합니다.
                  상세페이지보다 강력한 설득력을 지닌 고효율 전환 채널로 평가됩니다.
                </p>
              </div>
            </div>

            {/* Bottom: Evidence Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100 bg-slate-50/50">
              
              {/* Evidence 1 */}
              <div className="p-6 md:p-8 flex items-start gap-4">
                <div className="bg-white p-3 rounded-xl shadow-sm text-brand border border-slate-100 shrink-0">
                  <Repeat size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg mb-1">Re-watch Behavior</h4>
                  <p className="text-xs text-brand-600 font-bold uppercase mb-2">반복 재생을 통한 학습</p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    총 팔로워 대비 평균 조회수가 <strong className="text-slate-900">약 48%</strong>에 달합니다. 
                    조회수가 도달수보다 높은 현상은 사용자들이 영상을 튜토리얼처럼 반복해서 보고 있음을 시사합니다.
                  </p>
                </div>
              </div>

              {/* Evidence 2 */}
              <div className="p-6 md:p-8 flex items-start gap-4">
                 <div className="bg-white p-3 rounded-xl shadow-sm text-brand border border-slate-100 shrink-0">
                  <MessageSquareText size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg mb-1">Active Reviewers</h4>
                  <p className="text-xs text-brand-600 font-bold uppercase mb-2">능동적 구매 검토자</p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    <strong className="text-slate-900">댓글 &gt; 좋아요</strong> 현상은 팬들이 수동적 수용자가 아님을 증명합니다. 
                    단순 반응을 넘어 적극적으로 질문하고 정보를 탐색하는 '구매 검토' 단계의 유저들입니다.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* III. Top 3 Important Metrics */}
        <section ref={section3Ref} className="scroll-mt-40">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-brand text-white flex items-center justify-center font-bold font-logo">III</div>
            <h2 className="text-xl font-bold text-slate-800">커머스 관점 핵심 3개 지표 (Deep Dive)</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deepDiveMetrics.map((metric) => (
              <div key={metric.id} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:border-brand/50 transition-colors group flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-brand-50 p-2.5 rounded-lg text-brand group-hover:bg-brand group-hover:text-white transition-colors">
                    <metric.icon size={24} />
                  </div>
                  <div className="text-right">
                    <span className="block text-2xl font-bold text-slate-800">{metric.mainValue}</span>
                    {metric.subValue && <span className="text-xs text-slate-400 font-medium">{metric.subValue}</span>}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-4">{metric.title}</h3>
                
                <div className="space-y-3 mt-auto">
                  <div className="bg-slate-50 p-3 rounded-lg">
                    <p className="text-[11px] font-bold text-slate-500 uppercase mb-1">{metric.reasonTitle}</p>
                    <p className="text-xs text-slate-700 leading-snug">
                      {metric.reason.split('**').map((part, index) => 
                        index % 2 === 1 ? <strong key={index}>{part}</strong> : part
                      )}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-brand uppercase mb-1">{metric.insightTitle}</p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {metric.insight.split('**').map((part, index) => 
                        index % 2 === 1 ? <strong key={index} className="text-slate-800">{part}</strong> : part
                      )}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* IV. Funnel & Mechanism */}
        <section ref={section4Ref} className="scroll-mt-40">
           <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-brand text-white flex items-center justify-center font-bold font-logo">IV</div>
            <h2 className="text-xl font-bold text-slate-800">팬덤 구매 여정 분석</h2>
          </div>

          <div className="space-y-6">
            {/* 1. Channel Funnel Modeling */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm">
               <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                 <div>
                   <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                     <Layers size={20} className="text-brand" /> 채널 고유의 구매 퍼널 모델링
                   </h3>
                   <p className="text-sm text-slate-500 mt-1">
                     시각적 자극보다 <strong className="text-slate-800 bg-slate-100 px-1 rounded">논리적 설득</strong>과 <strong className="text-slate-800 bg-slate-100 px-1 rounded">학습</strong>을 통해 구매가 일어나는 구조
                   </p>
                 </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
                  {/* Connecting Line (Mobile Hidden) */}
                  <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-slate-100 -translate-y-1/2 hidden md:block z-0"></div>

                  {/* Step 1 */}
                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 relative z-10 h-full flex flex-col hover:border-brand/30 transition-colors group">
                     <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-xs font-bold text-slate-400 mb-3 group-hover:border-brand group-hover:text-brand shadow-sm">01</div>
                     <div className="flex items-center gap-2 mb-2">
                        <Magnet size={18} className="text-slate-500" />
                        <h4 className="font-bold text-slate-800">유입 (Inflow)</h4>
                     </div>
                     <p className="text-xs font-bold text-slate-700 mb-2">Pain Point 자극</p>
                     <div className="bg-white p-3 rounded-lg border border-slate-100 text-[11px] text-slate-600 leading-snug mt-auto">
                        "비율 똥망", "붓기" 등 팬들의 결핍을 찌르는 썸네일과 카피
                     </div>
                  </div>

                  {/* Step 2 */}
                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 relative z-10 h-full flex flex-col hover:border-brand/30 transition-colors group">
                     <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-xs font-bold text-slate-400 mb-3 group-hover:border-brand group-hover:text-brand shadow-sm">02</div>
                     <div className="flex items-center gap-2 mb-2">
                        <Repeat size={18} className="text-slate-500" />
                        <h4 className="font-bold text-slate-800">검증 (Verify)</h4>
                     </div>
                     <p className="text-xs font-bold text-slate-700 mb-2">반복 시청 및 학습</p>
                     <div className="bg-white p-3 rounded-lg border border-slate-100 text-[11px] text-slate-600 leading-snug mt-auto">
                        <span className="text-brand font-bold">조회수 &gt; 도달수</span><br/>
                        솔루션을 반복 시청하며 "정말 될까?" 검증
                     </div>
                  </div>

                  {/* Step 3 */}
                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 relative z-10 h-full flex flex-col hover:border-brand/30 transition-colors group">
                     <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-xs font-bold text-slate-400 mb-3 group-hover:border-brand group-hover:text-brand shadow-sm">03</div>
                     <div className="flex items-center gap-2 mb-2">
                        <MessageCircle size={18} className="text-slate-500" />
                        <h4 className="font-bold text-slate-800">확신 (Confidence)</h4>
                     </div>
                     <p className="text-xs font-bold text-slate-700 mb-2">Social Proof</p>
                     <div className="bg-white p-3 rounded-lg border border-slate-100 text-[11px] text-slate-600 leading-snug mt-auto">
                        <span className="text-brand font-bold">댓글 &gt; 좋아요</span><br/>
                        타 유저들의 반응 확인 및 정보 공유로 확신 획득
                     </div>
                  </div>

                  {/* Step 4 */}
                  <div className="bg-gradient-to-br from-brand-50 to-white p-5 rounded-xl border border-brand/20 relative z-10 h-full flex flex-col shadow-sm">
                     <div className="w-8 h-8 rounded-full bg-brand text-white border border-brand flex items-center justify-center text-xs font-bold mb-3 shadow-md">04</div>
                     <div className="flex items-center gap-2 mb-2">
                        <ShoppingBag size={18} className="text-brand" />
                        <h4 className="font-bold text-slate-800">전환 (Conversion)</h4>
                     </div>
                     <p className="text-xs font-bold text-brand mb-2">논리적 설득 완료</p>
                     <div className="bg-white p-3 rounded-lg border border-brand/10 text-[11px] text-slate-600 leading-snug mt-auto">
                        상세페이지보다 강력한 설득력을 지닌 고효율 전환 발생
                     </div>
                  </div>
               </div>
            </div>

            {/* 2. Buying Trigger Deep Dive */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {/* Relationship */}
               <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                  <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2 mb-4 relative z-10">
                     <BadgeCheck size={20} className="text-brand" /> 관계성 (Relationship)
                  </h3>
                  <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 relative z-10">
                     <p className="text-sm text-slate-800 font-bold mb-2">"실패를 먼저 경험해 본 언니"</p>
                     <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        완벽하게 태어난 워너비가 아니라, 노력과 도구로 컴플렉스를 극복한 <span className="bg-white px-1 py-0.5 rounded border border-slate-200 font-bold text-slate-800">노력형 전문가</span>로 인식합니다.
                     </p>
                     <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-white border border-slate-200 rounded text-[10px] text-slate-500 font-medium">#극복서사</span>
                        <span className="px-2 py-1 bg-white border border-slate-200 rounded text-[10px] text-slate-500 font-medium">#진정성</span>
                     </div>
                  </div>
               </div>

               {/* Motivation */}
               <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                  <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2 mb-4 relative z-10">
                     <Zap size={20} className="text-yellow-500 fill-yellow-500" /> 구매 동기 (Utility & Trust)
                  </h3>
                  <div className="space-y-3 relative z-10">
                     <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0"></div>
                        <div>
                           <span className="text-xs font-bold text-slate-700 block">Trust (신뢰)</span>
                           <p className="text-xs text-slate-500">"이 언니가 쓰는 거면 진짜 효과 있겠지"</p>
                        </div>
                     </div>
                     <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0"></div>
                        <div>
                           <span className="text-xs font-bold text-slate-700 block">Simplicity (단순화)</span>
                           <p className="text-xs text-slate-500">"복잡하지 않고 딱 이거 하나면 된다고?"</p>
                        </div>
                     </div>
                     <div className="bg-brand-50 rounded-lg p-3 border border-brand/20 mt-2 flex items-center gap-2">
                        <Sparkles size={16} className="text-brand" />
                        <p className="text-xs font-bold text-brand-800">
                           Key Trigger: 시각적으로 증명된 '전/후 차이'
                        </p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* V. SWOT Action Plan */}
        <section ref={section5Ref} className="scroll-mt-40">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-brand text-white flex items-center justify-center font-bold font-logo">V</div>
            <h2 className="text-xl font-bold text-slate-800">전략적 제언 (채널 장단점 맞춤 전략)</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Opportunity Boosting */}
            <div className="bg-white rounded-2xl p-6 border-l-4 border-l-brand shadow-sm flex flex-col h-full">
              <div className="flex items-center gap-2 mb-6">
                <span className="bg-brand/10 text-brand text-xs font-bold px-2 py-1 rounded">강점 극대화</span>
                <h3 className="text-lg font-bold text-slate-800">Opportunity Boosting</h3>
              </div>
              
              {/* Observation */}
              <div className="mb-5 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="flex items-start gap-2 mb-1">
                  <Search size={14} className="text-slate-400 mt-1" />
                  <span className="text-xs font-bold text-slate-500 uppercase">발견된 강점 (Observation)</span>
                </div>
                <p className="text-sm font-medium text-slate-800 leading-snug">
                  기형적으로 높은 <span className="text-brand font-bold">댓글 참여율 (댓글 &gt; 좋아요)</span> & 높은 <span className="text-brand font-bold">반복 시청률</span>.
                </p>
              </div>

              {/* Strategy Name */}
              <div className="mb-4">
                <p className="text-xs text-slate-500 font-bold uppercase mb-1">Strategy Name</p>
                <p className="text-xl font-bold text-brand">Interactive Q-Commerce <span className="text-base font-normal text-slate-600">(댓글 기반 선매출)</span></p>
              </div>

              {/* Logic */}
              <div className="mb-6">
                 <p className="text-xs text-slate-500 font-bold uppercase mb-2">Logic (논리적 배경)</p>
                 <p className="text-sm text-slate-600 leading-relaxed text-justify">
                   팬들은 정보를 얻기 위해 댓글창에 모입니다. 구매 좌표가 열리기 전, 댓글창을 <strong className="bg-brand/5 text-brand-700 px-1">'상세페이지 Q&A 섹션'</strong>처럼 활용하여 구매 장애 요인을 사전에 제거할 수 있습니다.
                 </p>
              </div>

              {/* Action Plan */}
              <div className="space-y-4 pt-4 border-t border-slate-100 mt-auto">
                <h4 className="text-xs font-bold text-slate-700 uppercase">Business Action Plan</h4>
                
                <div className="flex gap-3 text-sm text-slate-600 items-start">
                    <div className="bg-brand-50 p-1.5 rounded text-brand mt-0.5 shrink-0">
                       <MessageCircle size={14} />
                    </div>
                    <div>
                      <span className="font-bold text-slate-800 block mb-0.5">Teasing Phase</span>
                      <span className="text-slate-600 text-xs">"궁금한 점 질문 주세요" → 대댓글/후속 영상으로 답변하여 <span className="underline decoration-brand/30">효능감 부여</span>.</span>
                    </div>
                </div>

                <div className="flex gap-3 text-sm text-slate-600 items-start">
                    <div className="bg-brand-50 p-1.5 rounded text-brand mt-0.5 shrink-0">
                       <Lock size={14} />
                    </div>
                    <div>
                      <span className="font-bold text-slate-800 block mb-0.5">Lock-in Phase</span>
                      <span className="text-slate-600 text-xs">"댓글 단 분들께만 시크릿 링크 발송" → <span className="underline decoration-brand/30">DB 확보 및 실구매 직결</span>.</span>
                    </div>
                </div>
              </div>

              {/* Expectation */}
              <div className="mt-5 bg-brand text-white p-3 rounded-lg text-center shadow-md shadow-brand/20">
                <p className="text-xs font-bold uppercase opacity-80 mb-1">Expected Effect</p>
                <p className="text-sm font-bold">구매 전환율(CVR) 극대화 & 오픈런(Open Run) 유도</p>
              </div>
            </div>

            {/* Risk Management */}
            <div className="bg-white rounded-2xl p-6 border-l-4 border-l-slate-400 shadow-sm flex flex-col h-full">
              <div className="flex items-center gap-2 mb-6">
                <span className="bg-slate-100 text-slate-500 text-xs font-bold px-2 py-1 rounded">약점 보완</span>
                <h3 className="text-lg font-bold text-slate-800">Risk Management</h3>
              </div>
              
              {/* Observation */}
              <div className="mb-5 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="flex items-start gap-2 mb-1">
                  <AlertCircle size={14} className="text-slate-400 mt-1" />
                  <span className="text-xs font-bold text-slate-500 uppercase">발견된 약점 (Observation)</span>
                </div>
                <p className="text-sm font-medium text-slate-800 leading-snug">
                  유효 팔로워 비율(9.4%)의 상대적 열세. 조회수가 잘 나오는 것에 비해 <span className="text-slate-600 font-bold border-b border-slate-300">팔로워 전환은 더딜 수 있음</span>.
                </p>
              </div>

              {/* Strategy Name */}
              <div className="mb-4">
                <p className="text-xs text-slate-500 font-bold uppercase mb-1">Strategy Name</p>
                <p className="text-xl font-bold text-slate-700">Save & Search <span className="text-base font-normal text-slate-500">(저장 최적화)</span></p>
              </div>

              {/* Logic */}
              <div className="mb-6">
                 <p className="text-xs text-slate-500 font-bold uppercase mb-2">Logic (논리적 배경)</p>
                 <p className="text-sm text-slate-600 leading-relaxed text-justify">
                   즉각적인 팔로우 전환이 낮다면, 유동 인구를 놓치지 않기 위해 <strong className="bg-slate-100 text-slate-800 px-1">'저장(Save)'</strong>을 유도하여 나중에라도 구매하게 만들어야 합니다. 이 채널은 '정보성'이 강하므로 저장 유도에 유리합니다.
                 </p>
              </div>

              {/* Action Plan */}
              <div className="space-y-4 pt-4 border-t border-slate-100 mt-auto">
                <h4 className="text-xs font-bold text-slate-700 uppercase">Business Action Plan</h4>
                
                <div className="flex gap-3 text-sm text-slate-600 items-start">
                   <div className="bg-slate-100 p-1.5 rounded text-slate-500 mt-0.5 shrink-0">
                       <Bookmark size={14} />
                    </div>
                   <div>
                     <span className="font-bold text-slate-800 block mb-0.5">Caption CTA</span>
                     <span className="text-slate-600 text-xs">"지금 바로 저장해두고 내일 아침 따라하세요" 문구 삽입.</span>
                   </div>
                </div>

                <div className="flex gap-3 text-sm text-slate-600 items-start">
                   <div className="bg-slate-100 p-1.5 rounded text-slate-500 mt-0.5 shrink-0">
                       <Search size={14} />
                    </div>
                   <div>
                     <span className="font-bold text-slate-800 block mb-0.5">SEO Keywords</span>
                     <span className="text-slate-600 text-xs">#얼굴작아지는법 #붓기빼는법 등 <span className="text-slate-800 font-bold">문제 해결형 키워드</span> 선점.</span>
                   </div>
                </div>
              </div>

               {/* Expectation */}
              <div className="mt-5 bg-slate-700 text-white p-3 rounded-lg text-center shadow-md">
                <p className="text-xs font-bold uppercase opacity-60 mb-1">Expected Effect</p>
                <p className="text-sm font-bold">상시 판매(Steady Seller) 매출 확보</p>
              </div>
            </div>

          </div>
        </section>

        {/* VI. Executive Summary */}
        <section ref={section6Ref} className="scroll-mt-40">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-brand text-white flex items-center justify-center font-bold font-logo">VI</div>
            <h2 className="text-xl font-bold text-slate-800">최종 결론 (Executive Summary)</h2>
          </div>
          
          <div className="relative bg-slate-900 rounded-3xl p-8 md:p-10 overflow-hidden shadow-2xl">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none mix-blend-screen"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none mix-blend-screen"></div>
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1 */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col hover:bg-white/10 transition-all duration-300 group">
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-gradient-to-br from-brand-400 to-brand-600 w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg shadow-brand/20 group-hover:scale-110 transition-transform">
                    <Crown className="text-white" size={24} />
                  </div>
                  <span className="text-5xl font-logo text-white/5 font-bold absolute right-6 top-6">01</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Market Dominance<br/><span className="text-base font-normal text-slate-400">(시장 지배력)</span></h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4 flex-1">
                  <strong className="text-brand-300">25-34세 여성(33.7%)</strong>이라는 구매력 높은 핵심 타깃을 
                  <span className="text-white font-bold"> 91% 순도</span>로 확보한 최적의 매체입니다.
                  단순 노출을 넘어 '설득'이 필요한 카테고리에서 독보적입니다.
                </p>
                <div className="mt-auto pt-4 border-t border-white/5">
                   <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-500/20 border border-brand-500/30 text-brand-200 text-[11px] font-bold">
                     <Target size={12} /> Target Efficiency: High
                   </span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col hover:bg-white/10 transition-all duration-300 group">
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-gradient-to-br from-blue-400 to-blue-600 w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                    <BarChart3 className="text-white" size={24} />
                  </div>
                  <span className="text-5xl font-logo text-white/5 font-bold absolute right-6 top-6">02</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Data Confidence<br/><span className="text-base font-normal text-slate-400">(데이터 신뢰도)</span></h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4 flex-1">
                  단순 인플루언서가 아닌 <strong className="text-blue-300">'고효율 세일즈 채널'</strong>입니다. 
                  <span className="text-white font-bold"> 댓글 &gt; 좋아요(110%)</span>는 적극적 구매 의사를, 
                  <span className="text-white font-bold"> 조회수 &gt; 도달수(2.6x)</span>는 확실한 교육 효과를 증명합니다.
                </p>
                <div className="mt-auto pt-4 border-t border-white/5">
                   <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-200 text-[11px] font-bold">
                     <TrendingUp size={12} /> Sales Potential: High
                   </span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col hover:bg-white/10 transition-all duration-300 group">
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-gradient-to-br from-pink-400 to-pink-600 w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg shadow-pink-500/20 group-hover:scale-110 transition-transform">
                    <Rocket className="text-white" size={24} />
                  </div>
                  <span className="text-5xl font-logo text-white/5 font-bold absolute right-6 top-6">03</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Winning Strategy<br/><span className="text-base font-normal text-slate-400">(필승 전략)</span></h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4 flex-1">
                  단순 협찬보다는 <strong className="text-pink-300">튜토리얼 형태</strong>의 협업을 제안합니다.
                  댓글창을 활용한 <span className="text-white font-bold">인터랙티브 커머스</span> 전략 구사 시 
                  ROAS를 극대화할 수 있는 최적의 타이밍입니다.
                </p>
                <div className="mt-auto pt-4 border-t border-white/5">
                   <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-pink-500/20 border border-pink-500/30 text-pink-200 text-[11px] font-bold">
                     <Zap size={12} /> Action: Interactive Q-Commerce
                   </span>
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>

    </div>
  );
};

export default FandomDashboard;
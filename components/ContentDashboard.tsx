import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  Layers,
  ThermometerSnowflake,
  MoveHorizontal,
  Scissors,
  ScanFace,
  Ruler,
  Fingerprint,
  MousePointerClick,
  PlayCircle,
  Quote,
  BrainCircuit,
  Lightbulb,
  Box,
  Crown,
  Search,
  AlertTriangle,
  Megaphone,
  Eye,
  MousePointer2,
  Anchor,
  Scale,
  FileText,
  Users,
  ArrowRight,
  TrendingUp,
  Target,
  FileBarChart2,
  BookOpen,
  ChevronRight,
  LayoutTemplate,
  Camera,
  Clapperboard,
  Heart
} from 'lucide-react';

const ContentDashboard: React.FC = () => {
  const [activeStrategyIndex, setActiveStrategyIndex] = useState(0);
  
  // Data Structure for Minimum Requirements (Scalable for dynamic data)
  const requirementsData = [
    {
      id: 1,
      patternLabel: "Pattern 01",
      statusBadge: "100% (12/12건)",
      statusColor: "bg-green-50 text-green-700 border-green-200", // Green for 100%
      icon: AlertTriangle,
      iconColorClass: "group-hover:bg-brand group-hover:text-white", // Hover effect color
      title: "명확한 문제 제기",
      subTitle: "Problem Framing",
      description: (
        <>
          단순한 정보 전달이 아닙니다. <strong className="text-slate-900 bg-slate-100 px-1">팬덤이 일상에서 겪는 구체적인 고민</strong>을 직접적으로 언급하며 시작하여 즉각적인 공감대를 형성해야 합니다.
        </>
      ),
      footerContent: (
        <div className="text-xs text-slate-600 text-center italic font-medium space-y-1">
          <p>“묘하게 촌스럽고 남상으로 보인다면?”</p>
          <p>“얼굴 작아지고 싶다면”</p>
        </div>
      ),
      hasQuoteIcon: true
    },
    {
      id: 2,
      patternLabel: "Pattern 02",
      statusBadge: "100% (12/12건)",
      statusColor: "bg-green-50 text-green-700 border-green-200",
      icon: Eye,
      iconColorClass: "group-hover:bg-blue-500 group-hover:text-white",
      title: "실제 사용 과정 시연",
      subTitle: "Visual Demonstration",
      description: (
        <>
          텍스트나 말로 설명하는 것을 넘어, <strong className="text-slate-900 bg-slate-100 px-1">바르고 문지르는 전 과정</strong>을 시각적으로 보여주어야 합니다. 이는 제형과 사용법을 직관적으로 이해시키고 신뢰를 형성하는 필수 조건입니다.
        </>
      ),
      footerContent: (
        <div className="flex justify-between text-xs font-bold text-slate-600 px-2">
          <span className="flex flex-col items-center gap-1"><CheckCircle2 size={14} className="text-brand"/> Texture</span>
          <span className="w-px h-full bg-slate-200"></span>
          <span className="flex flex-col items-center gap-1"><CheckCircle2 size={14} className="text-brand"/> Gesture</span>
          <span className="w-px h-full bg-slate-200"></span>
          <span className="flex flex-col items-center gap-1"><CheckCircle2 size={14} className="text-brand"/> Result</span>
        </div>
      ),
      hasQuoteIcon: false
    },
    {
      id: 3,
      patternLabel: "Pattern 03",
      statusBadge: "High (8/12건)",
      statusColor: "bg-brand-50 text-brand-700 border-brand-200", // Brand color for High but not 100%
      icon: MousePointer2,
      iconColorClass: "group-hover:bg-indigo-500 group-hover:text-white",
      title: "구체적인 행동 유도",
      subTitle: "Call to Action",
      description: (
        <>
          소비에 그치지 않고 <strong className="text-slate-900 bg-slate-100 px-1">실제 행동(저장, 따라하기)</strong>으로 이어지도록 직접적으로 명령해야 합니다. 콘텐츠의 활용 가치를 상기시키는 명확한 장치가 필요합니다.
        </>
      ),
      footerContent: (
        <div className="text-xs text-slate-600 text-center italic font-medium space-y-1">
          <p>“저장해 뒀다가 꼭 따라해 보세요”</p>
          <p>“저장하고 무조건 따라하기”</p>
        </div>
      ),
      hasQuoteIcon: true
    }
  ];

  const strategies = [
    {
      id: 1,
      title: "Facial Re-building",
      subTitle: "5분 얼굴 비율 재창조",
      icon: ScanFace,
      colorClass: "text-brand",
      bgClass: "bg-brand",
      borderClass: "border-brand",
      keyItem: "듀얼-엔디드 컨투어 & 하이라이터 스틱",
      context: (
        <>
          ‘haaarpeeer’는 패션에서 "어중간한 체형", "비율 똥망"과 같은 신체적 한계를 옷으로 <strong>‘재조립(Re-build)’</strong>하는 데 집요하게 집중한다. 이 페르소나가 뷰티로 확장될 때, 이목구비의 아름다움보다 <strong>얼굴의 전체적인 비율과 윤곽을 교정</strong>하려는 니즈와 완벽하게 일치한다. 그녀가 얼굴 비율을 논하는 것은 단순 메이크업이 아니라, 브랜드 철학을 관통하는 ‘비율 설계’의 연장선이다.
        </>
      ),
      dataProof: (
        <>
          팬들은 <strong className="text-brand-700 bg-brand-50 px-1">“묘하게 촌스럽고 남상으로 보인다면?”</strong>과 같은 선천적 한계(Feature)에 대한 해결책을 갈망한다. 또한 <strong className="text-brand-700 bg-brand-50 px-1">“매번 실패하셨던 분들”</strong>이라는 표현처럼, 복잡한 컨투어링 기술에 대한 장벽이 높다. 이 복잡한 과정을 스틱 하나로 <strong>‘5분’ 만에 단순화</strong>했을 때 팬들은 폭발적인 반응을 보였다.
        </>
      ),
      spec: (
        <>
          <strong>‘듀얼-엔디드 스틱’</strong>은 컨투어와 하이라이터를 하나로 합쳐 도구를 찾는 시간과 부피를 줄여준다. <strong>‘크림-투-파우더’</strong> 제형은 도구 없이 손으로도 쉽게 블렌딩 가능하여, 곰손들의 ‘기술적 실패’를 원천 차단하는 최적의 솔루션이다.
        </>
      ),
      guide: {
        concept: "옷으로 체형의 단점을 보완하듯, 단 하나의 스틱으로 5분 만에 얼굴의 황금 비율을 찾아내고 숨겨진 입체감을 극대화하는 셀프 얼굴 골격 재창조 가이드.",
        intro: "‘haaarpeeer’ 특유의 고백적 화법으로 시작. \"여러분, 제가 옷으로 비율 뜯어고치는 건 도가 텄는데… 솔직히 얼굴 여백은 답이 없다고 생각했거든요? ‘그동안 감쪽같이 속았죠?’ 사실 이 스틱 하나로 버티고 있었습니다.\"",
        action: "얼굴 반쪽에만 스틱을 사용하며 극적인 {전후} 대비를 명확히 보여준다. 자막으로 \"스틱 3번 긋고 펴주면 5분 만에 중안부 5mm 단축\"과 같이 구체적인 {측정} 효과를 강조한다.",
        ment: "\"옷으로 어깨 뽕 넣는 거랑 똑같아요. 없는 앞광대 만들어주고, 턱선은 날렵하게 깎아주는 거예요. 복잡한 공식 필요 없고, 그냥 뼈 위치에 쓱 긋고 손으로 펴주면 끝. ‘누가 파데브러시가 어렵다고 했나요ㅋㅋ’ 컨투어링이 더 쉬워요.\""
      }
    },
    {
      id: 2,
      title: "V-Line Excavator",
      subTitle: "숨은 라인 발굴 (De-puffing Tech)",
      icon: Ruler,
      colorClass: "text-blue-500",
      bgClass: "bg-blue-500",
      borderClass: "border-blue-500",
      keyItem: "EMS & 크라이오 쿨링 뷰티 디바이스",
      context: (
        <>
          ‘haaarpeeer’는 감성적 만족보다 <strong>‘측정 가능한 결과’</strong>를 신뢰한다. "다리 붓기 마를 날 없는 분들"을 위해 줄자로 둘레를 재던 그녀에게, 얼굴의 <strong>‘라인 정리’와 ‘붓기 관리’</strong>는 필연적인 과제다. 뷰티 디바이스로 붓기를 관리하고 숨겨진 라인을 ‘발굴’하는 것은, 그녀의 철학을 얼굴에 적용하는 가장 자연스러운 행보다.
        </>
      ),
      dataProof: (
        <>
          아침마다 붓는 얼굴은 개인의 노력으로 통제하기 어려운 <strong>‘고질적 문제’</strong>다. 이 문제를 해결하고, 줄자나 사진 그리드로 <strong>&#123;전후&#125; 수치를 측정</strong>하여 보여주는 패턴은 6건의 성공 사례에서 모두 발견된 필승 공식이다. <strong className="text-blue-700 bg-blue-50 px-1">“숫자는 거짓말 안 해요”</strong>라는 접근은 팬들의 의심을 잠재운다.
        </>
      ),
      spec: (
        <>
          <strong>‘크라이오(Cryo) 쿨링’</strong>은 피부 온도를 즉각적으로 낮춰 붓기를 물리적으로 완화한다. 여기에 <strong>‘EMS(미세전류)’</strong>가 더해져 근육 탄력을 끌어올려 숨겨진 V라인을 선명하게 만든다. 이 두 기능의 조합은 ‘라인 발굴’이라는 니즈에 부합하는 최적의 기술이다.
        </>
      ),
      guide: {
        concept: "중요한 날 아침, 옷 핏을 망치는 밤 사이의 흔적(붓기)을 지우고, 내 얼굴에 숨겨져 있던 가장 날렵한 V라인을 ‘발굴’해내는 5분 긴급 복구 루틴.",
        intro: "전날 밤 라면을 먹는 모습을 짧게 보여준 후, 다음 날 아침 부은 얼굴로 등장한다. \"어젯밤의 저를 매우 칩니다… 근데 괜찮아요. 우리에겐 ‘발굴템’이 있으니까. 제 태평양같은 이마를 숨겨준 비밀템처럼, 이건 제 턱선을 발굴해주는 템이에요.\"",
        action: "사용 전, 스마트폰 카메라의 그리드 기능이나 줄자로 얼굴 폭과 턱선 라인을 **{측정}**하여 기록한다. 디바이스를 사용하는 5분 과정을 타임랩스로 보여준 뒤, 같은 방식으로 **{측정}**하여 극적인 {전후} 수치 변화를 명확히 보여준다.",
        ment: "\"보이세요? 숫자 거짓말 안 하는 거. 이게 바로 제가 옷 입기 전에 무조건 하는 의식이에요. 살을 빼는 게 아니라, 불필요한 붓기를 걷어내고 원래 내 얼굴선을 찾는 거죠. 옷 핏을 살리는 숨은 얼굴선, 오늘부터 발굴하세요.\""
      }
    },
    {
      id: 3,
      title: "Invisible Skin Corset",
      subTitle: "완벽한 보정 & 극강의 편안함",
      icon: Fingerprint,
      colorClass: "text-pink-500",
      bgClass: "bg-pink-500",
      borderClass: "border-pink-500",
      keyItem: "고밀착 세미매트 쿠션 & 블러링 프라이머 SET",
      context: (
        <>
          그녀는 <strong>‘완벽한 단점 커버’</strong>와 <strong>‘깃털 같은 편안함’</strong>이라는 양립하기 힘든 가치를 동시에 추구한다. "불편하면 안 입는다"는 패션 철학이 뷰티로 이어져, <strong>‘피부 코르셋(보정)’과 ‘츄리닝(편안함)’</strong>을 동시에 갖춘 베이스 제품을 필연적으로 요구하게 된다. 이는 단순 리뷰가 아니라 그녀의 철학을 피부 위에 구현하는 행위다.
        </>
      ),
      dataProof: (
        <>
          ‘커버력은 답답하고, 편안하면 커버가 안 된다’는 고질적 딜레마를 해결한다. <strong className="text-pink-700 bg-pink-50 px-1">“비싼 모공 제품도 효과 없었다면”</strong>이라는 불신을 가진 팬들에게, 하나의 제품이 <strong>다중 가치(커버+편안함)</strong>를 제공함을 증명할 때 반응이 폭발한다.
        </>
      ),
      spec: (
        <>
          <strong>‘블러링 프라이머’</strong>(실리콘-라이트)로 요철을 메워 코르셋의 기반을 다지고, <strong>‘고밀착 세미매트 쿠션’</strong>(필름 형성제)으로 얇은 막을 씌워 결점을 커버하면서도 묻어나지 않게 한다. 각기 다른 기술로 상충된 니즈를 해결하는 시스템적 솔루션이다.
        </>
      ),
      guide: {
        concept: "피부의 결점과 요철은 코르셋처럼 완벽하게 잡아주지만, 하루 종일 츄리닝을 입은 것처럼 편안하게 숨 쉴 수 있는 신개념 ‘피부 보정 속옷’ 베이스 루틴.",
        intro: "편안한 츄리닝을 입고 등장해 말한다. \"제가 옷 입을 때 제일 중요한 게 뭔지 아시죠? 편한 거. 근데 피부는 맨날 갑옷 입은 것처럼 답답하게 다녔잖아요. 오늘부터는 피부에도 츄리닝 입혀줄 겁니다.\"",
        action: "얼굴의 문제 부위를 가감 없이 클로즈업하여 보여준다. 프라이머와 쿠션을 바른 후, 스마트폰 액정에 얼굴을 대보거나 흰 옷깃에 스쳐 묻어남이 없는 **{테스트}**를 진행한다. 10시간 후에도 무너짐 없이 편안한 피부 상태를 보여주며 지속력을 **{측정}**하여 증명한다.",
        ment: "\"이게 바로 보이지 않는 피부 코르셋이에요. 모공이랑 요철은 꽉 잡아주는데, 공기는 솔솔 통하는 느낌? ‘이게 왜 립이지?’ 싶었던 것처럼, 이게 왜 파데지? 싶을 정도로 가벼워요. 코르셋처럼 결점은 완벽하게, 츄리닝처럼 편안하게. 이제 둘 다 포기하지 마세요.\""
      }
    },
    {
      id: 4,
      title: "Ratio-Boosting Hair",
      subTitle: "두상 성형을 통한 전신 비율 완성",
      icon: Scissors,
      colorClass: "text-indigo-500",
      bgClass: "bg-indigo-500",
      borderClass: "border-indigo-500",
      keyItem: "루트 볼륨 부스팅 스프레이 & 텍스처 파우더",
      context: (
        <>
          ‘haaarpeeer’ 콘텐츠의 궁극적 목표는 <strong>‘비율 개선’</strong>이다. 헤어 볼륨으로 두상을 교정하여 시선을 위로 끌어올리는 것은, 그녀의 <strong>‘비율 재창조’ 서사를 완성하는 마지막 퍼즐</strong>이다. 헤어 볼륨을 다루는 순간 그녀는 패션을 넘어 전신 비율을 설계하는 ‘비율 마스터’로 거듭난다.
        </>
      ),
      dataProof: (
        <>
          축 처진 정수리와 넓은 이마는 팬들이 숙명처럼 여기는 <strong>‘타고난 한계’</strong>다. <strong className="text-indigo-700 bg-indigo-50 px-1">“저주받은 모발”</strong>이나 “빈약한 머리숱” 고민에 대해, 10초 만에 정수리가 살아나는 <strong>&#123;전후&#125; 시각적 대비</strong>를 보여줄 때 팬들은 강한 실행 동기를 얻는다.
        </>
      ),
      spec: (
        <>
          <strong>‘루트 부스팅 스프레이’</strong>는 젖은 모발의 모근을 지지해 근본적 볼륨을 세우고, <strong>‘텍스처 파우더’</strong>는 마른 모발의 유분을 잡고 마찰력을 높여 즉각적 볼륨을 만든다. 스타일링의 시작과 수정을 책임지는, 한계를 극복하는 최적의 듀오다.
        </>
      ),
      guide: {
        concept: "키 5cm 커 보이고 얼굴 5% 작아 보이는 마법의 비율 치트키. 옷이 아닌 헤어 볼륨으로 전체적인 프로포션을 완성하는 두상 성형 스타일링.",
        intro: "평소처럼 완벽하게 옷을 입고 나왔지만, 축 처진 머리로 등장한다. \"여러분, 제가 맨날 옷으로 비율 사기 치는 거 아시죠? 근데 오늘따라 뭔가 이상하지 않아요? 바로 이 죽어버린 정수리 때문이에요. ‘제 태평양같은 이마’가 더 넓어 보이는 마법…\"",
        action: "카메라를 고정시킨 채, 스프레이와 파우더를 사용하기 전과 후의 전체적인 모습을 명확한 {전후} 대비로 보여준다. 옆모습을 촬영하여 정수리 볼륨이 살아나는 높이를 시각적으로 강조한다.",
        ment: "\"옷으로 1cm 늘리는 건 힘든데, 머리 볼륨 1cm 살리는 건 10초면 끝나요. 이게 바로 진짜 비율 치트키. ‘전후 차이 보면 제가 왜 꾸준히 하는지 아시겠죠?’ 옷이 아니라 헤어 볼륨으로 비율을 완성하세요. 저장하고 무조건 따라하기!\""
      }
    }
  ];

  return (
    <div className="space-y-12 pb-12">
      
      {/* 1. Hero Section: Strategic Report Intro (Document Style) */}
      <section className="bg-slate-900 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl border-t border-white/10">
        
        {/* Background Gradients for Depth */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-brand-900/20 to-transparent rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
           {/* Header Row: Title & Subject */}
           <div className="flex flex-col lg:flex-row justify-between items-end border-b border-white/10 pb-10 mb-10 gap-8">
              <div className="flex-1 w-full">
                 <div className="flex items-center justify-between lg:justify-start gap-4 mb-6">
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-300 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 backdrop-blur-sm">
                       <FileBarChart2 size={12} /> Strategic Insight Report
                    </span>
                    <span className="text-slate-500 text-[10px] font-mono tracking-widest uppercase">
                       Confidential / Ver 1.0
                    </span>
                 </div>
                 
                 <div className="relative">
                    <h1 className="text-6xl md:text-8xl font-bold text-white font-logo tracking-tighter mb-4 leading-none bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-slate-400">
                       haaarpeeer
                    </h1>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-slate-300 border-l-2 border-brand-500/50 pl-4 md:border-l-0 md:pl-0">
                       <span className="text-2xl md:text-3xl font-bold text-white tracking-tight">초개인화 브랜딩 전략</span>
                       <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                       <span className="text-lg md:text-2xl font-light text-slate-400 tracking-tight">심층 분석 보고서</span>
                    </div>
                 </div>
              </div>

              {/* Subject Badge */}
              <div className="hidden lg:flex flex-col items-end gap-2 min-w-[200px] pb-2 opacity-80 hover:opacity-100 transition-opacity">
                 <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider text-right">Analyzed Subject</p>
                 <div className="flex items-center gap-3 bg-white/5 px-4 py-2.5 rounded-xl border border-white/5 backdrop-blur-md">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-slate-700 to-slate-600 flex items-center justify-center font-logo font-bold text-white border border-white/10 shadow-lg">
                       H
                    </div>
                    <div className="text-right">
                       <p className="text-sm font-bold text-white leading-none font-logo">@haaarpeeer</p>
                    </div>
                 </div>
              </div>
           </div>

           {/* Intro Section */}
           <div className="mb-12">
              <div className="space-y-6">
                 <h2 className="text-xl md:text-2xl font-bold text-brand-300 flex items-center gap-3">
                    <span className="bg-brand-500/20 w-8 h-8 flex items-center justify-center rounded text-sm border border-brand-500/30 font-logo">I</span>
                    서론: 전략 수립의 배경 및 핵심 논리
                 </h2>
                 <div className="prose prose-invert max-w-none">
                    <p className="text-slate-300 text-base md:text-lg leading-relaxed text-justify font-light">
                       본 보고서는 인플루언서 <span className="text-white font-bold border-b border-brand-500/50">‘haaarpeeer’</span>의 고유한 페르소나와 팬덤의 잠재된 반응 패턴을 데이터 기반으로 융합하여, 
                       해당 채널이 갖고 있는 <strong className="text-white">핵심 구매 동인</strong>과 <strong className="text-white">콘텐츠 반응 메커니즘</strong>을 정밀하게 규명하고, 
                       이를 바탕으로 ‘터질 확률이 높은’ <strong className="text-white">제품·캠페인 방향</strong>을 도출하기 위해 작성되었습니다.
                    </p>
                 </div>
              </div>
           </div>

           {/* Core Logic Diagram */}
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 bg-slate-800 rounded-2xl border border-white/10 overflow-hidden divide-y lg:divide-y-0 lg:divide-x divide-white/10">
              
              {/* 1. Fandom Pain Point */}
              <div className="p-8 hover:bg-white/5 transition-colors group relative">
                 <div className="absolute top-0 left-0 w-1 h-full bg-pink-500 hidden lg:block"></div>
                 <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-pink-500/20 text-pink-400 rounded-lg">
                       <AlertTriangle size={20} />
                    </div>
                    <span className="text-xs font-bold text-pink-400 uppercase tracking-widest">Background</span>
                 </div>
                 <h3 className="text-lg font-bold text-white mb-2">1. 팬덤의 깊은 좌절감</h3>
                 <p className="text-sm text-slate-400 mb-4 font-medium">"개선 불가능한 외모 콤플렉스"</p>
                 
                 <div className="bg-black/30 rounded-lg p-4 mb-4 border border-white/5">
                    <p className="text-xs text-slate-300 italic leading-relaxed mb-2">"뭘 해도 펌 안 먹는 저주받은 모발..."</p>
                    <p className="text-xs text-slate-300 italic leading-relaxed">"블러셔&쉐딩 매번 실패하셨던 분들..."</p>
                 </div>
                 
                 <p className="text-xs text-slate-400 leading-relaxed text-justify">
                    팬덤은 단순 정보가 아닌, <strong className="text-white">반복적인 기술적 실패 경험</strong>을 해결해 줄 확실한 검증(Before/After, 측정)을 갈망합니다.
                 </p>
              </div>

              {/* 2. Persona Identity */}
              <div className="p-8 hover:bg-white/5 transition-colors group relative">
                 <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 hidden lg:block"></div>
                 <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-blue-500/20 text-blue-400 rounded-lg">
                       <ScanFace size={20} />
                    </div>
                    <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Persona</span>
                 </div>
                 <h3 className="text-lg font-bold text-white mb-2">2. 비율 설계자</h3>
                 <p className="text-sm text-slate-400 mb-4 font-medium font-logo">Proportion Architect</p>
                 
                 <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2">
                       <CheckCircle2 size={14} className="text-blue-500" />
                       <span className="text-xs text-slate-300">단점 고백 ("비율 똥망", "어중간한 체형")</span>
                    </div>
                    <div className="flex items-center gap-2">
                       <CheckCircle2 size={14} className="text-blue-500" />
                       <span className="text-xs text-slate-300">적극적 재조립 (Re-build)</span>
                    </div>
                 </div>
                 
                 <p className="text-xs text-slate-400 leading-relaxed text-justify">
                    단점을 가리는 소극적 행위자가 아닌, 신체 비율을 적극적으로 교정하고 <strong className="text-white">시각적 비율을 재창조</strong>하는 능동적 전문가입니다.
                 </p>
              </div>

              {/* 3. Strategic Solution */}
              <div className="p-8 bg-gradient-to-br from-brand-900/40 to-slate-800 relative group">
                 <div className="absolute top-0 left-0 w-1 h-full bg-brand-500 hidden lg:block"></div>
                 <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-brand-500/20 text-brand-300 rounded-lg">
                       <Crown size={20} />
                    </div>
                    <span className="text-xs font-bold text-brand-300 uppercase tracking-widest">Core Strategy</span>
                 </div>
                 <h3 className="text-lg font-bold text-white mb-2">3. 대체 불가능한 솔루션</h3>
                 <p className="text-sm text-slate-400 mb-4 font-medium">Irreplaceable Solution Provider</p>
                 
                 <div className="flex items-center gap-3 mb-4 bg-white/5 p-3 rounded-lg border border-brand-500/30">
                    <Zap className="text-yellow-400 fill-yellow-400 shrink-0" size={16} />
                    <p className="text-xs text-white font-bold leading-tight">
                       "자기 확신을 선물하는<br/>브랜드로 자리매김"
                    </p>
                 </div>
                 
                 <p className="text-xs text-slate-300 leading-relaxed text-justify">
                    팬들의 '해결 불가능한 문제'와 인플루언서의 '비율 재창조 능력'이 결합하여, 모든 제안이 필연적 선택지가 됩니다.
                 </p>
              </div>

           </div>
           
           {/* Flow Arrow */}
           <div className="hidden lg:flex justify-between items-center px-16 -mt-3 relative z-10 pointer-events-none">
              <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center border border-white/10 text-white shadow-xl translate-x-1/2">
                <ArrowRight size={20} />
              </div>
              <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center border border-brand-500/50 text-brand-300 shadow-xl shadow-brand-900/50 -translate-x-1/2">
                <Sparkles size={20} />
              </div>
           </div>

        </div>
      </section>

      {/* 2. Base Requirements */}
      <section>
        {/* Updated Header Style */}
        <div className="mb-8">
           <div className="flex items-center gap-3 mb-2">
             <div className="w-1.5 h-7 bg-brand rounded-sm"></div>
             <h2 className="text-2xl font-bold text-slate-900">Minimum Requirements</h2>
           </div>
           <p className="text-sm text-slate-500 pl-4.5">성공을 위한 3대 필수 전제 조건 (Success Base)</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {requirementsData.map((req) => (
            <div key={req.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-brand/30 transition-all group flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2">
                   <div className={`w-8 h-8 rounded-lg bg-slate-100 text-slate-500 flex items-center justify-center transition-colors ${req.iconColorClass}`}>
                      <req.icon size={18} />
                   </div>
                   <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{req.patternLabel}</span>
                </div>
                <span className={`${req.statusColor} border border-current/20 text-[10px] font-bold px-2 py-0.5 rounded-full`}>
                  {req.statusBadge}
                </span>
              </div>

              <h3 className="font-bold text-slate-900 text-lg mb-1">{req.title}</h3>
              <p className="text-xs text-slate-400 font-medium mb-4">{req.subTitle}</p>
              
              <p className="text-sm text-slate-700 leading-relaxed mb-6 flex-1">
                {req.description}
              </p>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 relative mt-auto">
                {req.hasQuoteIcon && (
                  <Quote size={12} className="text-slate-400 absolute top-3 left-3 transform -scale-x-100" />
                )}
                {req.footerContent}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Core Strategies */}
      <section>
        {/* Updated Header Style */}
        <div className="mb-8">
           <div className="flex items-center gap-3 mb-2">
             <div className="w-1.5 h-7 bg-brand rounded-sm"></div>
             <h2 className="text-2xl font-bold text-slate-900">채널 핵심 콘텐츠 전략</h2>
           </div>
           <p className="text-sm text-slate-500 pl-4.5">데이터와 페르소나 분석으로 도출한 4가지 핵심 필승 전략</p>
        </div>

        <div className="flex flex-col gap-6">
          
          {/* Strategy Tabs */}
          <div className="flex flex-wrap gap-2 md:gap-4 p-1.5 bg-slate-100 rounded-xl overflow-x-auto no-scrollbar">
            {strategies.map((strategy, index) => (
              <button
                key={strategy.id}
                onClick={() => setActiveStrategyIndex(index)}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-bold transition-all whitespace-nowrap flex-1 md:flex-none justify-center ${
                  activeStrategyIndex === index
                    ? `bg-white text-slate-900 shadow-md ring-1 ring-slate-200`
                    : 'text-slate-500 hover:bg-slate-200/50 hover:text-slate-700'
                }`}
              >
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] ${
                  activeStrategyIndex === index ? strategy.bgClass + ' text-white' : 'bg-slate-200'
                }`}>
                  {activeStrategyIndex === index ? <strategy.icon size={12}/> : strategy.id}
                </div>
                {strategy.title}
              </button>
            ))}
          </div>

          {/* Active Strategy Detail View */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden min-h-[600px] flex flex-col animate-fade-in">
             {(() => {
                const activeStrategy = strategies[activeStrategyIndex];
                return (
                  <>
                    <div className="bg-slate-50 border-b border-slate-100 p-6 md:p-8">
                       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                          <div>
                            <span className={`inline-block ${activeStrategy.colorClass} text-xs font-bold tracking-widest uppercase mb-2`}>
                               Strategy 0{activeStrategy.id}
                            </span>
                            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 font-logo">
                              {activeStrategy.title}
                            </h3>
                            <p className="text-slate-500 text-lg">{activeStrategy.subTitle}</p>
                          </div>
                          <div className={`hidden md:flex w-16 h-16 ${activeStrategy.colorClass} bg-opacity-10 rounded-2xl items-center justify-center`}>
                             <activeStrategy.icon size={32} />
                          </div>
                       </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-100 flex-1">
                       {/* Left Column */}
                       <div className="lg:col-span-7 p-6 md:p-8 space-y-8">
                          <div className="space-y-3">
                             <div className="flex items-center gap-2 text-slate-800 font-bold text-sm uppercase tracking-wide">
                                <BrainCircuit size={16} className={activeStrategy.colorClass} />
                                [1] 채널 바이럴 공식 (Viral Formula)
                             </div>
                             <p className="text-slate-600 text-sm leading-7 text-justify bg-slate-50 p-5 rounded-2xl border border-slate-100">
                                {activeStrategy.context}
                             </p>
                          </div>

                          <div className="space-y-3">
                             <div className="flex items-center gap-2 text-slate-800 font-bold text-sm uppercase tracking-wide">
                                <FileBarChart2 size={16} className={activeStrategy.colorClass} />
                                [2] 데이터 기반 성공 요인 (Data)
                             </div>
                             <p className="text-slate-600 text-sm leading-7 text-justify bg-slate-50 p-5 rounded-2xl border border-slate-100">
                                {activeStrategy.dataProof}
                             </p>
                          </div>

                          <div className="space-y-3 pt-2">
                             <div className="flex items-center gap-2 text-slate-800 font-bold text-sm uppercase tracking-wide">
                                <Box size={16} className={activeStrategy.colorClass} />
                                [3] 추천 아이템 (Recommended Item)
                             </div>
                             
                             <div className={`p-6 rounded-2xl border-2 ${activeStrategy.borderClass} bg-slate-50/50 shadow-sm relative overflow-hidden group`}>
                                <div className={`absolute top-0 right-0 p-2 rounded-bl-xl ${activeStrategy.bgClass} text-white`}>
                                  <Sparkles size={14} />
                                </div>
                                <div className="mb-4">
                                   <span className={`text-[10px] font-bold uppercase tracking-wider ${activeStrategy.colorClass} mb-1 block`}>Selected Item</span>
                                   <h4 className="text-lg font-bold text-slate-900">{activeStrategy.keyItem}</h4>
                                </div>
                                <div className="space-y-2">
                                  <div className="flex items-start gap-2">
                                     <div className={`mt-1.5 w-1.5 h-1.5 rounded-full ${activeStrategy.bgClass}`}></div>
                                     <p className="text-sm text-slate-700 leading-relaxed font-medium">
                                        {activeStrategy.spec}
                                     </p>
                                  </div>
                                </div>
                             </div>
                          </div>
                       </div>

                       {/* Right Column */}
                       <div className="lg:col-span-5 bg-slate-900 text-slate-300 p-0 flex flex-col relative overflow-hidden">
                          <div className={`absolute top-0 right-0 w-64 h-64 ${activeStrategy.bgClass} opacity-10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2`}></div>
                          <div className="p-6 md:p-10 flex-1 flex flex-col z-10 justify-center">
                             <div className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wide mb-8 border-b border-white/10 pb-4">
                                <Clapperboard size={18} className={activeStrategy.colorClass} />
                                [4] 전략 맞춤 콘텐츠 예시
                             </div>

                             <div className="mb-10">
                                <h5 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Concept Definition</h5>
                                <p className="text-xl text-white font-medium leading-relaxed font-serif italic opacity-90">
                                   "{activeStrategy.guide.concept}"
                                </p>
                             </div>

                             <div className="space-y-8 flex-1">
                                <div className="relative pl-6 border-l border-white/10">
                                   <div className={`absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full ${activeStrategy.bgClass} ring-4 ring-slate-900`}></div>
                                   <span className={`text-xs font-bold ${activeStrategy.colorClass} uppercase tracking-wider block mb-2`}>Intro (도입부)</span>
                                   <p className="text-sm leading-relaxed text-slate-400">{activeStrategy.guide.intro}</p>
                                </div>

                                <div className="relative pl-6 border-l border-white/10">
                                   <div className={`absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-slate-700 ring-4 ring-slate-900`}></div>
                                   <span className={`text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2`}>Action (연출)</span>
                                   <p className="text-sm leading-relaxed text-slate-400">{activeStrategy.guide.action}</p>
                                </div>

                                <div className="relative pl-6 border-l border-white/10">
                                   <div className={`absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-white ring-4 ring-slate-900`}></div>
                                   <span className={`text-xs font-bold text-white uppercase tracking-wider block mb-2`}>Ment (멘트)</span>
                                   <div className="bg-white/10 p-5 rounded-xl border border-white/5 relative">
                                      <Quote size={14} className="absolute top-4 left-4 text-white/30 transform -scale-x-100" />
                                      <p className="text-sm leading-relaxed text-slate-200 pl-5 italic">
                                         {activeStrategy.guide.ment}
                                      </p>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                  </>
                );
             })()}
          </div>

        </div>
      </section>

      {/* 4. Comprehensive Conclusion (Redesigned) */}
      <section className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden p-8 md:p-10">
        {/* Updated Header Style */}
        <div className="mb-8">
           <div className="flex items-center gap-3 mb-2">
             <div className="w-1.5 h-7 bg-brand rounded-sm"></div>
             <h2 className="text-2xl font-bold text-slate-900">종합 결론: 대체 불가능한 아이덴티티</h2>
           </div>
           <p className="text-sm text-slate-500 pl-4.5">팬덤과 데이터를 관통하는 단 하나의 정의: "Personal Proportion Consultant"</p>
        </div>

        {/* Identity Banner - Compact & Clean without excessive padding */}
        <div className="bg-brand-50/30 rounded-2xl p-8 border border-brand/10 text-center mb-10 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-1 h-full bg-brand"></div>
           <p className="text-xl md:text-2xl text-slate-800 font-bold leading-relaxed mb-3">
              "데이터 기반의 실용적 해결책으로 <br className="hidden md:block"/>
              <span className="text-brand">자신감의 비율을 재창조하는 삶의 설계자</span>"
           </p>
           <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              A Life Architect who Rebuilds the Proportions of Confidence
           </p>
        </div>

        <div className="space-y-10">
           {/* [1] Persona */}
           <div>
              <div className="flex items-center gap-2 mb-4 border-b border-slate-100 pb-2">
                 <h3 className="text-lg font-bold text-slate-900">1. 페르소나의 핵심 (The Core Persona)</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {/* Left: Empathy */}
                 <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 flex gap-4">
                    <div className="bg-white p-2.5 rounded-lg border border-slate-100 h-fit shrink-0 text-pink-500 shadow-sm">
                       <Heart size={20} className="fill-pink-50" />
                    </div>
                    <div>
                       <h4 className="font-bold text-slate-900 text-base mb-1">인간적 공감 (Empathy)</h4>
                       <p className="text-xs text-slate-500 font-bold mb-2">"비율 똥망", "저주받은 모발"</p>
                       <p className="text-sm text-slate-700 leading-relaxed text-justify">
                          그녀는 완벽한 전문가가 아닙니다. 자신의 결점을 솔직하게 고백하는 '언니'의 면모로 팬들의 <strong>심리적 방어기제를 해제</strong>합니다.
                       </p>
                    </div>
                 </div>

                 {/* Right: Strategy */}
                 <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 flex gap-4">
                    <div className="bg-white p-2.5 rounded-lg border border-slate-100 h-fit shrink-0 text-blue-500 shadow-sm">
                       <Scale size={20} className="fill-blue-50" />
                    </div>
                    <div>
                       <h4 className="font-bold text-slate-900 text-base mb-1">냉철한 전략 (Strategy)</h4>
                       <p className="text-xs text-slate-500 font-bold mb-2">줄자 측정, 그리드 분석</p>
                       <p className="text-sm text-slate-700 leading-relaxed text-justify">
                          감성적 위로에 그치지 않습니다. 냉철하게 수치를 재고 솔루션을 제시하여 <strong>이성적 신뢰</strong>를 획득합니다.
                       </p>
                    </div>
                 </div>
              </div>
           </div>

           {/* [2] Winning Formula */}
           <div>
              <div className="flex items-center gap-2 mb-4 border-b border-slate-100 pb-2">
                 <h3 className="text-lg font-bold text-slate-900">2. 성공의 작동 원리 (The Winning Formula)</h3>
              </div>

              <div className="border border-slate-200 rounded-xl divide-y md:divide-y-0 md:divide-x divide-slate-200 grid grid-cols-1 md:grid-cols-3 bg-white">
                 {/* Step 1 */}
                 <div className="p-5 group hover:bg-slate-50 transition-colors">
                    <div className="flex justify-between items-start mb-3">
                       <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest border border-slate-200 px-1.5 py-0.5 rounded">Trigger</span>
                       <div className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 text-xs font-bold flex items-center justify-center">1</div>
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2">고백 (Confession)</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mb-3 h-10">
                       "태평양 이마", "저주받은 모발" 등 치부를 드러내어 유대감 형성
                    </p>
                    <div className="bg-slate-100 rounded p-2 text-xs text-slate-500 text-center font-medium">
                       Psychological Trigger
                    </div>
                 </div>

                 {/* Step 2 */}
                 <div className="p-5 relative group hover:bg-brand-50/30 transition-colors">
                     <div className="absolute top-0 left-0 w-full h-1 bg-brand hidden md:block"></div>
                     <div className="flex justify-between items-start mb-3">
                       <span className="text-[10px] font-bold text-brand uppercase tracking-widest border border-brand/20 text-brand px-1.5 py-0.5 rounded bg-brand-50">Action</span>
                       <div className="w-6 h-6 rounded-full bg-brand text-white text-xs font-bold flex items-center justify-center shadow-md shadow-brand/20">2</div>
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2">데이터 증명 (Proof)</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mb-3 h-10">
                       전후 비교, 측정 수치 등 논쟁 불가능한 증거 제시
                    </p>
                    <div className="bg-brand-50 border border-brand/10 rounded p-2 text-xs text-brand-700 text-center font-bold">
                       Rational Conviction
                    </div>
                 </div>

                 {/* Step 3 */}
                 <div className="p-5 group hover:bg-slate-50 transition-colors">
                    <div className="flex justify-between items-start mb-3">
                       <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest border border-slate-200 px-1.5 py-0.5 rounded">Reward</span>
                       <div className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 text-xs font-bold flex items-center justify-center">3</div>
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2">통제감 (Control)</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mb-3 h-10">
                       "나도 바꿀 수 있다"는 효능감 부여하여 맹목적 신뢰 완성
                    </p>
                    <div className="bg-slate-100 rounded p-2 text-xs text-slate-500 text-center font-medium">
                       Self-Efficacy
                    </div>
                 </div>
              </div>
           </div>

           {/* [3] Strategic Outlook */}
           <div className="bg-slate-900 rounded-xl p-6 md:p-8 text-center md:text-left flex flex-col md:flex-row items-center gap-6 shadow-lg">
              <div className="shrink-0">
                 <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-brand-500 to-purple-600 flex items-center justify-center text-white shadow-inner border border-white/10">
                    <Sparkles size={28} />
                 </div>
              </div>
              <div className="flex-1">
                 <h3 className="text-brand-300 text-xs font-bold uppercase tracking-widest mb-2">Strategic Vision</h3>
                 <h4 className="text-xl md:text-2xl font-bold text-white mb-3">"뷰티를 넘어선 퍼스널 비율 컨설턴트"</h4>
                 <p className="text-slate-300 text-sm leading-relaxed text-justify md:text-left">
                    한 가지 컬러 트렌드나 특정 기술에 매몰되지 않습니다. 
                    <span className="text-white font-bold"> 얼굴 윤곽, 피부 표현, 붓기 관리, 헤어 볼륨</span>이라는 4가지 핵심 축을 유기적으로 연결하여 
                    '비율'이라는 통합된 솔루션을 제공합니다. 이는 그녀를 단순 인플루언서가 아닌, 
                    <span className="text-brand-200 border-b border-brand-500/50 pb-0.5">대체 불가능한 라이프스타일 멘토</span>로 자리매김하게 할 것입니다.
                 </p>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
};

export default ContentDashboard;
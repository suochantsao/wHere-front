import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <main className="font-sans">
      {/* Hero Section - 整合所有專家建議 */}
      <section className="relative min-h-screen overflow-hidden">
        {/* 背景圖片 */}
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center" />
        
        {/* 淡色遮罩確保文字可讀性 */}
        <div className="absolute inset-0 bg-white/20" />
        
        {/* 內容層 */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          
          {/* 主要內容區 */}
          <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                
                {/* 左側：文字內容 - 整合產品經理 + 文案專家建議 */}
                <div className="text-center lg:text-left space-y-8 opacity-0 translate-y-8 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
                  
                  {/* 情感共鳴層：先建立問題認知 */}
                  <div className="mb-8">
                    <p className="text-lg text-gray-500 mb-4 font-light">
                      「搬家時找不到剪刀、買了第三把雨傘、重要文件不知道收在哪⋯⋯」
                    </p>
                  </div>

                  {/* 核心價值主張：文案專家推薦版本 */}
                  <div className="space-y-6">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                      別再買重複的東西，<br />
                      也別再
                      <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                        翻遍所有箱子
                      </span>
                    </h1>
                  </div>
                  
                  {/* 副標語和支撐文案 */}
                  <div className="space-y-4">
                    <p className="text-xl lg:text-2xl text-gray-700 font-medium">
                      wHere 幫你記住物品的家，讓多地生活更輕鬆一點
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-2xl lg:max-w-none">
                      這些日常小困擾，我們都懂。現在有個簡單的方法，讓你的每樣東西都有跡可循。
                    </p>
                  </div>
                  
                  {/* 行動按鈕 - 溫和 CTA */}
                  <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-6">
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group">
                      免費試試看
                      <svg className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                    
                    <button className="border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600 font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-md">
                      了解怎麼用
                    </button>
                  </div>
                  
                  {/* 信任建立：降低心理門檻 */}
                  <div className="flex justify-center lg:justify-start items-center gap-8 text-sm text-gray-500 pt-4">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                      <span>完全免費開始</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                      <span>隨時可以升級</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                      <span>跨平台同步</span>
                    </div>
                  </div>
                  
                  {/* 社會證明 */}
                  <div className="pt-8 border-t border-gray-200">
                    <p className="text-sm text-gray-500 mb-4">已有超過 500+ 多地生活者信賴使用</p>
                    <div className="flex justify-center lg:justify-start items-center space-x-4">
                      <div className="flex -space-x-2">
                        {[1,2,3,4,5].map((i) => (
                          <div key={i} className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full border-2 border-white"></div>
                        ))}
                      </div>
                      <div className="flex items-center text-yellow-500">
                        {[1,2,3,4,5].map((i) => (
                          <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <span className="ml-2 text-sm text-gray-600">4.8/5</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* 右側：視覺元素 - UI/UX 建議 */}
                <div className="hidden lg:flex justify-center items-center opacity-0 translate-y-8 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards]">
                  <div className="relative">
                    {/* 手機模擬器 */}
                    <div className="relative bg-white rounded-3xl shadow-2xl p-2 transform rotate-3 hover:rotate-1 transition-transform duration-300">
                      <div className="bg-gray-900 rounded-2xl p-2 w-80 h-[600px]">
                        <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-6 h-full flex flex-col">
                          <div className="flex items-center justify-between mb-8">
                            <div className="text-white text-sm opacity-75">wHere</div>
                            <div className="flex space-x-1">
                              <div className="w-3 h-3 bg-white/20 rounded-full"></div>
                              <div className="w-3 h-3 bg-white/20 rounded-full"></div>
                              <div className="w-3 h-3 bg-white/20 rounded-full"></div>
                            </div>
                          </div>
                          
                          <div className="text-white text-2xl font-bold mb-8">我的物品</div>
                          
                          {/* 模擬物品列表 */}
                          <div className="space-y-4 flex-1">
                            {[
                              { item: '筆記型電腦', location: '台北家', color: 'bg-green-400' },
                              { item: '護照', location: '桃園家', color: 'bg-yellow-400' },
                              { item: '充電器', location: '辦公室', color: 'bg-blue-400' },
                              { item: '相機', location: '朋友家', color: 'bg-pink-400' }
                            ].map((data, i) => (
                              <div key={i} className="bg-white/20 backdrop-blur rounded-lg p-3 flex items-center justify-between animate-pulse" style={{animationDelay: `${i * 0.2}s`}}>
                                <div className="flex items-center">
                                  <div className={`w-3 h-3 ${data.color} rounded-full mr-3`}></div>
                                  <span className="text-white text-sm">{data.item}</span>
                                </div>
                                <div className="text-white/60 text-xs">{data.location}</div>
                              </div>
                            ))}
                          </div>
                          
                          <div className="bg-white/20 backdrop-blur rounded-lg p-4 text-center mt-4">
                            <div className="text-white/80 text-sm mb-2">快速搜尋</div>
                            <div className="w-full bg-white/30 rounded-full h-2">
                              <div className="bg-white h-2 rounded-full w-3/4 animate-pulse"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* 裝飾性元素 */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-300 rounded-full opacity-20 animate-bounce" style={{animationDelay: '1s'}}></div>
                    <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-pink-300 rounded-full opacity-20 animate-bounce" style={{animationDelay: '2s'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 滾動提示 */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center text-gray-800 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-lg shadow-sm">
              <span className="text-sm font-medium mb-2">探索更多功能</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Features - 重新設計突出核心價值 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              為什麼選擇 wHere？
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              專為多地生活設計的物品追蹤系統，解決真實生活中的實際問題
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-6">⏱️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">省時間</h3>
              <p className="text-gray-600">不再花時間翻箱倒櫃找東西，一秒定位物品位置</p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-6">💸</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">省錢</h3>
              <p className="text-gray-600">避免重複購買已有物品，每年節省數千元不必要支出</p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-6">😌</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">省心</h3>
              <p className="text-gray-600">隨時掌握物品位置的安心感，讓多地生活更從容</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience - 新增目標用戶展示 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              誰在使用 wHere？
            </h2>
            <p className="text-xl text-gray-600">
              每種生活方式，都有適合的整理方法
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '🏠', title: '頻繁搬家者', desc: '台北、桃園、高雄，每次搬家都能快速整理' },
              { icon: '💻', title: '數位遊牧族', desc: '隨時移動工作，重要物品永遠不遺失' },
              { icon: '✨', title: '極簡主義者', desc: '精準掌握每件物品，讓生活更有質感' },
              { icon: '👥', title: '共享公寓室友', desc: '室友間物品分享更清楚，減少誤會' },
              { icon: '📦', title: '小型倉儲業者', desc: '提升客戶服務，物品進出有條理' },
              { icon: '🎯', title: '收納愛好者', desc: '讓整理系統數位化，更有成就感' }
            ].map((user, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">{user.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{user.title}</h3>
                <p className="text-gray-600 text-sm">{user.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - 優化使用流程 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">簡單三步驟</h2>
            <p className="text-xl text-gray-600">讓物品追蹤變得像呼吸一樣自然</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto relative z-10">1</div>
                {/* 連線到下一步 */}
                <div className="absolute top-8 left-1/2 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 hidden md:block transform translate-x-8"></div>
              </div>
              <h3 className="text-xl font-semibold mb-4">建立地點</h3>
              <p className="text-gray-600">新增你的居住地點：家裡、辦公室、朋友家</p>
            </div>
            
            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto relative z-10">2</div>
                {/* 連線到下一步 */}
                <div className="absolute top-8 left-1/2 w-full h-1 bg-gradient-to-r from-pink-500 to-red-500 hidden md:block transform translate-x-8"></div>
              </div>
              <h3 className="text-xl font-semibold mb-4">記錄物品</h3>
              <p className="text-gray-600">拍照或輸入物品名稱，選擇存放位置</p>
            </div>
            
            <div className="text-center">
              <div className="mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto">3</div>
              </div>
              <h3 className="text-xl font-semibold mb-4">輕鬆找到</h3>
              <p className="text-gray-600">搜尋任何物品，立即知道確切位置</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - 真實用戶場景 */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">用戶真實分享</h2>
            <p className="text-xl text-gray-600">看看其他人如何用 wHere 改善生活</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">小</div>
                <div className="ml-4">
                  <div className="font-semibold">小雯</div>
                  <div className="text-sm text-gray-500">數位遊牧族</div>
                </div>
              </div>
              <p className="text-gray-600 italic">&ldquo;終於不用每次換城市都重新買充電器了！wHere 讓我的遊牧生活更有條理。&rdquo;</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">阿</div>
                <div className="ml-4">
                  <div className="font-semibold">阿凱</div>
                  <div className="text-sm text-gray-500">頻繁搬家者</div>
                </div>
              </div>
              <p className="text-gray-600 italic">&ldquo;搬了五次家，每次打包都不再慌亂。知道每樣東西在哪，搬家效率提升超多！&rdquo;</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">美</div>
                <div className="ml-4">
                  <div className="font-semibold">美玲</div>
                  <div className="text-sm text-gray-500">共享公寓室友</div>
                </div>
              </div>
              <p className="text-gray-600 italic">&ldquo;和室友分享物品位置超方便，再也不會搞混誰的東西放在哪裡了。&rdquo;</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4">wHere</h3>
              <p className="text-gray-400 mb-4">讓每件物品都有跡可循，讓多地生活更輕鬆。</p>
              <div className="flex space-x-4">
                <span className="text-2xl cursor-pointer hover:scale-110 transition-transform">📧</span>
                <span className="text-2xl cursor-pointer hover:scale-110 transition-transform">💬</span>
                <span className="text-2xl cursor-pointer hover:scale-110 transition-transform">📱</span>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">產品</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors">功能特色</li>
                <li className="hover:text-white cursor-pointer transition-colors">使用案例</li>
                <li className="hover:text-white cursor-pointer transition-colors">定價方案</li>
                <li className="hover:text-white cursor-pointer transition-colors">常見問題</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">關於</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors">我們的故事</li>
                <li className="hover:text-white cursor-pointer transition-colors">創業理念</li>
                <li className="hover:text-white cursor-pointer transition-colors">聯絡我們</li>
                <li className="hover:text-white cursor-pointer transition-colors">隱私政策</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">支援</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors">使用說明</li>
                <li className="hover:text-white cursor-pointer transition-colors">客服中心</li>
                <li className="hover:text-white cursor-pointer transition-colors">用戶社群</li>
                <li className="hover:text-white cursor-pointer transition-colors">意見回饋</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2025 wHere. 專為多地生活者設計的物品追蹤系統。</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

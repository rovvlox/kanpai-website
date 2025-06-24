import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bot, TrendingUp, Package, Zap } from "lucide-react"
import Link from "next/link"

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center">
                <span className="text-white text-lg font-bold">K</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">KanpAI</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-gray-600 hover:text-amber-600 transition-colors font-medium">
                About
              </Link>
              <Link href="/service" className="text-amber-600 font-semibold">
                Service
              </Link>
              <Link href="/recruit" className="text-gray-600 hover:text-amber-600 transition-colors font-medium">
                Recruit
              </Link>
              <Link href="/news" className="text-gray-600 hover:text-amber-600 transition-colors font-medium">
                News
              </Link>
              <Link href="/contact">
                <Button className="bg-amber-500 hover:bg-amber-600 text-white rounded-full px-6">Contact</Button>
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-6 natural-gradient">
        <div className="container mx-auto text-center">
          <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm">
            <span className="text-4xl">🍺</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">Service</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed text-balance">
            AIオーダーレコメンドサービス「KANPAI」
            <br />
            <span className="text-lg text-gray-500">クラフトビール体験を革新する</span>
          </p>
        </div>
      </section>

      {/* Main Service */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Card className="flat-card p-12">
              <CardHeader className="text-center pb-8">
                <Badge className="bg-amber-100 text-amber-700 border-amber-200 mb-4 px-4 py-2 rounded-full">
                  利用可能: 現在
                </Badge>
                <CardTitle className="text-3xl text-gray-900 mb-4">AIオーダーレコメンドサービス「KANPAI」</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <p className="text-gray-700 text-lg leading-relaxed text-balance">
                  ビアバーに設置するQRコードを通じて、お客様の好みを簡単な質問でヒアリング。
                  AIが即時にクラフトビールをレコメンドし、スタッフの接客負担を軽減すると同時に、
                  新しいビールとの出会いを創出します。 ビール初心者から上級者まで、誰もが自分に合った一杯を
                  手軽に楽しめるようになるサービスです。
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Bot className="h-8 w-8 text-amber-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">AIレコメンド</h3>
                    <p className="text-gray-600 text-sm">お客様の好みを分析し最適なビールを提案</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Zap className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">人手不足解消</h3>
                    <p className="text-gray-600 text-sm">スタッフの接客負担を軽減</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="h-8 w-8 text-orange-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">新しい出会い</h3>
                    <p className="text-gray-600 text-sm">普段選ばないビールとの出会いを創出</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How KanpAI Works - Actual Interface */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">KanpAIの使い方</h2>
            <p className="text-gray-600 text-lg">実際の画面でサービスの流れをご紹介</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1: Landing */}
              <Card className="flat-card p-6">
                <CardHeader className="text-center pb-4">
                  <Badge className="bg-amber-100 text-amber-700 border-amber-200 mb-3 px-3 py-1 text-sm rounded-full">
                    STEP 1
                  </Badge>
                  <CardTitle className="text-lg">診断開始</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="aspect-[9/16] bg-gray-100 rounded-lg overflow-hidden mb-4">
                    <img
                      src="/images/kanpai-landing.jpg"
                      alt="KanpAI診断開始画面"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-gray-600 text-sm text-center">QRコードでアクセスし、「診断を始める」をタップ</p>
                </CardContent>
              </Card>

              {/* Step 2: Questionnaire */}
              <Card className="flat-card p-6">
                <CardHeader className="text-center pb-4">
                  <Badge className="bg-amber-100 text-amber-700 border-amber-200 mb-3 px-3 py-1 text-sm rounded-full">
                    STEP 2
                  </Badge>
                  <CardTitle className="text-lg">質問回答</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="aspect-[9/16] bg-gray-100 rounded-lg overflow-hidden mb-4">
                    <img
                      src="/images/kanpai-questionnaire.jpg"
                      alt="KanpAI質問画面"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-gray-600 text-sm text-center">5つの簡単な質問に答えるだけ</p>
                </CardContent>
              </Card>

              {/* Step 3: Result */}
              <Card className="flat-card p-6">
                <CardHeader className="text-center pb-4">
                  <Badge className="bg-amber-100 text-amber-700 border-amber-200 mb-3 px-3 py-1 text-sm rounded-full">
                    STEP 3
                  </Badge>
                  <CardTitle className="text-lg">レコメンド</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="aspect-[9/16] bg-gray-100 rounded-lg overflow-hidden mb-4">
                    <img
                      src="/images/kanpai-result.jpg"
                      alt="KanpAIレコメンド結果画面"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-gray-600 text-sm text-center">AIがあなたにピッタリのビールを提案</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">たった3ステップで、あなたに最適なクラフトビールが見つかります</p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Features */}
      <section className="py-24 px-6 natural-gradient">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 border-blue-200 mb-4 px-4 py-2 rounded-full">
              📢 Coming Soon
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">未来の拡張機能</h2>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="flat-card p-8">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                    <Package className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">在庫管理システム</CardTitle>
                    <Badge className="bg-amber-100 text-amber-700 border-amber-200 mt-2 px-3 py-1 text-sm rounded-full">
                      リリース予定: 2025年6月
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  会計連動型のリアルタイム在庫確認・発注管理で、忙しいビアパブの業務を軽減する機能を順次追加予定です。
                </p>
              </CardContent>
            </Card>

            <Card className="flat-card p-8">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                    <Bot className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">仕入れAIエージェント</CardTitle>
                    <Badge className="bg-amber-100 text-amber-700 border-amber-200 mt-2 px-3 py-1 text-sm rounded-full">
                      リリース予定: 2025年内
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  販売実績や在庫データをもとに、最適な仕入れタイミング・数量をAIが提案。無駄な廃棄や品切れリスクを最小化します。
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              これらの拡張機能は現在開発中です。リリース時期・仕様の詳細は、準備が整い次第「News」ページなどで発信します。どうぞご期待ください！
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">プラン</h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="flat-card p-12">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-gray-900">KANPAI</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center space-y-4">
                  <div>
                    <span className="text-3xl font-bold text-amber-600">初期費用: 無料</span>
                  </div>
                  <div>
                    <span className="text-3xl font-bold text-amber-600">月額: 20,000円</span>
                    <span className="text-gray-600 ml-2">(税抜)</span>
                  </div>
                </div>

                <div className="bg-amber-50 p-4 rounded-lg">
                  <p className="text-amber-800 text-sm text-center">(まだ詳細未確定につき準備中です)</p>
                </div>

                <div className="text-center pt-6">
                  <Link href="/contact">
                    <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white rounded-full px-8 py-3">
                      お問い合わせ
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

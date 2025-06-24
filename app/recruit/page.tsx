import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Heart, Eye, Handshake, Zap, Search, Shield, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function RecruitPage() {
  const values = [
    { icon: Heart, title: "Hospitality", subtitle: "おもてなし" },
    { icon: Handshake, title: "Collaboration", subtitle: "協働" },
    { icon: Eye, title: "Transparency", subtitle: "透明性" },
  ]

  const culture = [
    { icon: Zap, title: "Speed", subtitle: "スピード" },
    { icon: Search, title: "Curiosity", subtitle: "好奇心" },
    { icon: Heart, title: "Love", subtitle: "愛情" },
    { icon: Shield, title: "Trust", subtitle: "信頼" },
  ]

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
              <Link href="/service" className="text-gray-600 hover:text-amber-600 transition-colors font-medium">
                Service
              </Link>
              <Link href="/recruit" className="text-amber-600 font-semibold">
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
            <Users className="h-12 w-12 text-amber-600" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">Recruit</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed text-balance">
            一緒に未来の「乾杯」を創りませんか？
            <br />
            <span className="text-lg text-gray-500">ビール業界を変革するメンバーを募集中</span>
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Card className="flat-card p-12">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-gray-900 mb-4">はじめに</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-700 text-lg leading-relaxed text-balance">
                  私たちのミッションは「人とビールを"乾杯"でつなぎ、新たな出会いを創造する」こと。
                </p>
                <p className="text-gray-700 text-lg leading-relaxed text-balance">
                  AIレコメンドを活用した「オーダーレコメンド」「在庫管理」「仕入れAIエージェント」などの事業を通じて、ビアバーや飲食業界をより盛り上げたいと考えています。
                </p>
                <p className="text-gray-700 text-lg leading-relaxed text-balance">
                  現在、業務委託 /
                  リモートワークOKの体制で以下の職種を募集しています。経験年数やスキルは問いません。私たちのビジョンに共感し、"乾杯"の未来を一緒に作りたい方をお待ちしております！
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-24 px-6 natural-gradient">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">私たちのカルチャー</h2>
          </div>

          <div className="max-w-6xl mx-auto space-y-12">
            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="flat-card p-8">
                <CardHeader>
                  <CardTitle className="text-xl text-amber-600">Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">「人とビールを"乾杯"でつなぎ、新たな出会いを創造する」</p>
                </CardContent>
              </Card>

              <Card className="flat-card p-8">
                <CardHeader>
                  <CardTitle className="text-xl text-amber-600">Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">「ビールを通じて人と人、人と地域が繋がる社会を目指す」</p>
                </CardContent>
              </Card>
            </div>

            {/* Values */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Value</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {values.map((value, index) => (
                  <Card key={index} className="flat-card p-6 text-center">
                    <CardContent className="p-0">
                      <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <value.icon className="h-6 w-6 text-amber-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">{value.title}</h4>
                      <p className="text-gray-600">（{value.subtitle}）</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Culture */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Culture</h3>
              <div className="grid md:grid-cols-4 gap-6">
                {culture.map((item, index) => (
                  <Card key={index} className="flat-card p-6 text-center">
                    <CardContent className="p-0">
                      <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <item.icon className="h-5 w-5 text-amber-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">（{item.subtitle}）</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selection Process */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">応募方法・選考フロー</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <Card className="flat-card p-8">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <Badge className="bg-amber-100 text-amber-800 border-amber-200 px-3 py-1 text-sm rounded-full">
                      1
                    </Badge>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">カジュアル面談</h3>
                      <p className="text-gray-700">
                        まずは弊社従業員と気軽にお話をしましょう。
                        <br />
                        ＊カジュアル面談で話した内容は選考には含まれません。
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="flat-card p-8">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <Badge className="bg-amber-100 text-amber-800 border-amber-200 px-3 py-1 text-sm rounded-full">
                      2
                    </Badge>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">面接（最大2回）</h3>
                      <p className="text-gray-700">
                        代表およびマネージャーと面談を行なっていただきます。
                        <br />
                        ＊場合によってはワークサンプルを設ける場合があります。
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="flat-card p-8">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <Badge className="bg-amber-100 text-amber-800 border-amber-200 px-3 py-1 text-sm rounded-full">
                      3
                    </Badge>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">内定・契約合意</h3>
                      <p className="text-gray-700">報酬や業務委託契約の条件をすり合わせを行います。</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 natural-gradient">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">よくある質問</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="flat-card p-8">
              <CardContent className="p-0">
                <h3 className="font-semibold text-gray-900 mb-3">正社員は募集していますか？</h3>
                <p className="text-gray-700">
                  原則、業務委託契約をさせていただいております。しかし、正社員の枠を都財しているわけではないためご希望の場合はご相談ください。
                </p>
              </CardContent>
            </Card>

            <Card className="flat-card p-8">
              <CardContent className="p-0">
                <h3 className="font-semibold text-gray-900 mb-3">リモートワークは可能ですか？</h3>
                <p className="text-gray-700">
                  可能です。しかし、必要に応じてオフィスや現地店舗に出向く場合がございます。
                </p>
              </CardContent>
            </Card>

            <Card className="flat-card p-8">
              <CardContent className="p-0">
                <h3 className="font-semibold text-gray-900 mb-3">給与設計はどうなっていますか？</h3>
                <p className="text-gray-700">
                  SO（ストックオプション）も含めて個別のご希望や経験に応じて総合的に決定します。
                </p>
              </CardContent>
            </Card>

            <Card className="flat-card p-8">
              <CardContent className="p-0">
                <h3 className="font-semibold text-gray-900 mb-3">福利厚生はありますか？</h3>
                <div className="text-gray-700 space-y-2">
                  <p>原則業務委託契約のため、ありません。しかし、正社員になると、</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>クラフトビール手当: 指定の条件を満たす場合、ビアバー訪問やビール試飲費を会社が一部負担</li>
                    <li>ブルワリー見学支援: ブルワリー見学ツアー参加時の交通費・チケット代を一部サポート</li>
                    <li>勉強会参加補助: ビール関連の勉強会やイベントへの参加費を補助（社内承認が必要）</li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-2">
                    （上記いずれも要事前申請・条件ありの制度です。詳細は面談時にご説明します。）
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-balance">
            「乾杯」を通じて人とビールの出会いを広げるために、
            <br />
            あなたの力をお貸しください。
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-balance">
            スキルや経験よりも、スピード・好奇心・愛情・信頼を大切に、未来のビール体験を一緒に創り上げましょう。
          </p>
          <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white rounded-full px-8 py-4" asChild>
            <a href="https://forms.gle/R9ivLHiXpLGsjpFV7" target="_blank" rel="noopener noreferrer">
              応募フォームへ
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}

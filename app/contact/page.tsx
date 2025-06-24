import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Twitter, ExternalLink, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
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
              <Link href="/recruit" className="text-gray-600 hover:text-amber-600 transition-colors font-medium">
                Recruit
              </Link>
              <Link href="/news" className="text-gray-600 hover:text-amber-600 transition-colors font-medium">
                News
              </Link>
              <Link href="/contact" className="text-amber-600 font-semibold">
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-6 natural-gradient">
        <div className="container mx-auto text-center">
          <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm">
            <Mail className="h-12 w-12 text-amber-600" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">Contact</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed text-balance">
            ご質問や導入のご相談など、お気軽にご連絡ください
            <br />
            <span className="text-lg text-gray-500">お客様のビジネスをサポートします</span>
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="flat-card p-8">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-8 w-8 text-amber-600" />
                  </div>
                  <CardTitle className="text-xl">Email</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-700 mb-4">info@kanpai.tokyo</p>
                  <a
                    href="mailto:info@kanpai.tokyo?subject=KanpAIサービスについてのお問い合わせ&body=お問い合わせ内容をこちらにご記入ください。"
                    className="inline-flex items-center justify-center px-4 py-2 border-2 border-amber-500 text-amber-600 hover:bg-amber-50 rounded-full font-medium transition-colors"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    メールを送る
                  </a>
                </CardContent>
              </Card>

              <Card className="flat-card p-8">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Twitter className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">Twitter</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-700 mb-4">@seshiru_47</p>
                  <Button
                    variant="outline"
                    className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50 rounded-full"
                    asChild
                  >
                    <a href="https://x.com/seshiru_47" target="_blank" rel="noopener noreferrer">
                      <Twitter className="h-4 w-4 mr-2" />
                      フォローする
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 px-6 natural-gradient">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">お問い合わせフォーム</h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="flat-card p-12">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <ExternalLink className="h-8 w-8 text-amber-600" />
                </div>
                <p className="text-gray-700 text-lg mb-8">詳細なお問い合わせは、以下のフォームからお願いいたします。</p>
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white rounded-full px-8 py-4" asChild>
                  <a href="https://forms.gle/R9ivLHiXpLGsjpFV7" target="_blank" rel="noopener noreferrer">
                    お問い合わせフォームへ
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">よくある質問</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="flat-card p-8">
              <CardContent className="p-0">
                <h3 className="font-semibold text-gray-900 mb-3">Q1. サービス導入までどのくらいかかりますか？</h3>
                <p className="text-gray-700">
                  A1. 通常は1週間程度でセットアップ可能ですが、正式リリース後に改めてご案内いたします。
                </p>
              </CardContent>
            </Card>

            <Card className="flat-card p-8">
              <CardContent className="p-0">
                <h3 className="font-semibold text-gray-900 mb-3">Q2. 料金プランは決まっていますか？</h3>
                <p className="text-gray-700">A2. 初期費用無料・月額16,500円(税抜)を予定しています。</p>
              </CardContent>
            </Card>

            <Card className="flat-card p-8">
              <CardContent className="p-0">
                <h3 className="font-semibold text-gray-900 mb-3">Q3. 在庫管理機能はいつ利用できますか？</h3>
                <p className="text-gray-700">
                  A3. 6月リリースを目指して準備中です。詳細決まり次第、
                  <Link href="/news" className="text-amber-600 hover:underline">
                    Newsページ
                  </Link>
                  でお知らせします。
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600">(随時、問い合わせが増えたら追記いたします。)</p>
          </div>
        </div>
      </section>
    </div>
  )
}

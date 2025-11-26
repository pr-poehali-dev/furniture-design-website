import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [furnitureType, setFurnitureType] = useState('kitchen');
  const [area, setArea] = useState([15]);
  const [complexity, setComplexity] = useState('medium');

  const calculatePrice = () => {
    const basePrice = furnitureType === 'kitchen' ? 50000 : furnitureType === 'wardrobe' ? 40000 : 30000;
    const areaMultiplier = area[0];
    const complexityMultiplier = complexity === 'simple' ? 0.8 : complexity === 'medium' ? 1 : 1.3;
    return Math.round(basePrice * areaMultiplier * complexityMultiplier);
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Sofa" className="text-primary" size={28} />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              МебельПро
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#process" className="hover:text-primary transition-colors">Процесс</a>
            <a href="#calculator" className="hover:text-primary transition-colors">Калькулятор</a>
            <Button>Консультация</Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
                ✨ Индивидуальный подход
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Проектируем мебель{' '}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  вашей мечты
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Создаём уникальные решения для вашего пространства. От эскиза до реализации — полный цикл работы с мебелью под заказ.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Обсудить проект
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Play" size={20} className="mr-2" />
                  Посмотреть работы
                </Button>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Проектов</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-secondary mb-2">12</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
              <img
                src="https://cdn.poehali.dev/projects/24330314-29df-44b6-8dee-07397faa21ab/files/417fe010-6d10-4285-9990-72983594707a.jpg"
                alt="Дизайн мебели"
                className="relative rounded-3xl shadow-2xl w-full object-cover h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-secondary/10 text-secondary hover:bg-secondary/20">
              Наши услуги
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Что мы предлагаем</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр услуг по проектированию и производству мебели
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'Home',
                title: 'Кухни на заказ',
                description: 'Эргономичные и стильные кухни, учитывающие все ваши потребности',
                color: 'primary',
              },
              {
                icon: 'Bed',
                title: 'Спальни и гардеробные',
                description: 'Уютные спальни и функциональные системы хранения',
                color: 'secondary',
              },
              {
                icon: 'Armchair',
                title: 'Гостиные',
                description: 'Современные решения для зоны отдыха и приёма гостей',
                color: 'accent',
              },
              {
                icon: 'Briefcase',
                title: 'Кабинеты',
                description: 'Рабочие пространства для максимальной продуктивности',
                color: 'primary',
              },
              {
                icon: 'Baby',
                title: 'Детские',
                description: 'Безопасная и яркая мебель для детских комнат',
                color: 'secondary',
              },
              {
                icon: 'Store',
                title: 'Коммерческая мебель',
                description: 'Офисы, магазины, рестораны — любые форматы',
                color: 'accent',
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20"
              >
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl bg-${service.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon name={service.icon as any} size={32} className={`text-${service.color}`} />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">
              Как мы работаем
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Процесс работы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Прозрачный и понятный путь от идеи до готовой мебели
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                step: 1,
                title: 'Консультация и замеры',
                description: 'Встречаемся, обсуждаем ваши пожелания, снимаем точные размеры помещения',
                icon: 'MessageSquare',
                color: 'primary',
              },
              {
                step: 2,
                title: '3D-проектирование',
                description: 'Создаём детальную визуализацию будущей мебели в вашем интерьере',
                icon: 'Boxes',
                color: 'secondary',
              },
              {
                step: 3,
                title: 'Согласование и корректировки',
                description: 'Вносим изменения по вашим замечаниям до полного соответствия ожиданиям',
                icon: 'CheckCircle',
                color: 'accent',
              },
              {
                step: 4,
                title: 'Производство',
                description: 'Изготавливаем мебель из качественных материалов на современном оборудовании',
                icon: 'Hammer',
                color: 'primary',
              },
              {
                step: 5,
                title: 'Доставка и установка',
                description: 'Привозим, собираем и настраиваем всё на месте. Убираем за собой',
                icon: 'Truck',
                color: 'secondary',
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-6 mb-8 group">
                <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-${item.color} to-${item.color}/70 flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform`}>
                  {item.step}
                </div>
                <Card className="flex-1 group-hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <Icon name={item.icon as any} size={24} className={`text-${item.color} mt-1`} />
                      <div>
                        <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
              Калькулятор стоимости
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Рассчитайте стоимость проекта</h2>
            <p className="text-xl text-muted-foreground">
              Получите предварительную оценку прямо сейчас
            </p>
          </div>

          <Card className="p-8 shadow-2xl border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Параметры проекта</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-3">
                <label className="text-sm font-medium">Тип мебели</label>
                <Select value={furnitureType} onValueChange={setFurnitureType}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kitchen">Кухня</SelectItem>
                    <SelectItem value="wardrobe">Гардеробная</SelectItem>
                    <SelectItem value="bedroom">Спальня</SelectItem>
                    <SelectItem value="office">Кабинет</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <label className="text-sm font-medium">Площадь помещения</label>
                  <span className="text-sm font-bold text-primary">{area[0]} м²</span>
                </div>
                <Slider
                  value={area}
                  onValueChange={setArea}
                  min={5}
                  max={50}
                  step={1}
                  className="py-4"
                />
              </div>

              <div className="space-y-3">
                <label className="text-sm font-medium">Сложность проекта</label>
                <Select value={complexity} onValueChange={setComplexity}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="simple">Простой</SelectItem>
                    <SelectItem value="medium">Средний</SelectItem>
                    <SelectItem value="complex">Сложный</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="pt-6 border-t">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg font-medium">Примерная стоимость:</span>
                  <span className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {calculatePrice().toLocaleString('ru-RU')} ₽
                  </span>
                </div>
                <Button className="w-full" size="lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
                <p className="text-sm text-muted-foreground text-center mt-4">
                  * Точная стоимость определяется после замера и составления проекта
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-primary/5 py-12 px-4 mt-20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Sofa" className="text-primary" size={24} />
                <span className="text-xl font-bold">МебельПро</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Проектирование мебели на заказ с 2012 года
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>+7 (495) 123-45-67</p>
                <p>info@mebelpro.ru</p>
                <p>Москва, ул. Примерная, 1</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Кухни на заказ</p>
                <p>Шкафы и гардеробные</p>
                <p>Офисная мебель</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-3">
                <Button variant="outline" size="icon">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="Phone" size={20} />
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="Mail" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            © 2024 МебельПро. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
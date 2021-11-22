import { AnimeItem } from '../common'
import s from './Layouts.module.scss'
import { animeList } from './../../types'

const animesList: animeList = [
  {
    code: 'jahy-sama-wa-kujikenai',
    names: {
      ru: 'Джахи не будет отчаиваться!',
    },
    description:
      'В центре истории — некогда могущественная демонесса по имени Джахи.\nЕё попытка защитить мир демонов от нападения девочки-волшебницы закончилась неудачей: мир демонов пал, а сама Джахи растеряла большую часть своих сил и перенеслась в мир людей. Кроме того, она приняла форму маленькой девочки и может лишь временно поддерживать свой истинный облик. \nВыживать в человеческом мире не так уж просто. Вместо привычных роскошных покоев — крохотная комната в старом доме, вместо толпы служанок — гора домашних дел.\nВ таких условиях думать о возрождении мира демонов некогда… Но Джахи не отчаивается! Она верит, что когда-нибудь сможет вернуть свои силы и законное звание правой руки Владыки демонов.',
    torrents: {
      series: {
        string: '1-16',
      },
      list: [
        null,
        {
          torrent_id: 17685,
        },
      ],
    },
    poster: {
      url: '/upload/release/350x500/9029.jpg',
    },
  },
  {
    code: 'mieruko-chan',
    names: {
      ru: 'Девочка, которая видит это',
    },
    description:
      'Старшеклассница Мико внезапно обнаруживает в себе необычную способность: она может видеть жутких призраков и отвратительных монстров. При этом никто, кроме неё, их не наблюдает! Несмотря на полнейший ужас,  Мико продолжает жить своей повседневной жизнью, делая вид, что не замечает кошмара, который её окружает. С этого момента девушке предстоит пройти через множество трудностей и выяснить причины загадочных явлений.',
    torrents: {
      series: {
        string: '1-8',
      },
      list: [
        null,
        {
          torrent_id: 17678,
        },
      ],
    },
    poster: {
      url: '/upload/release/350x500/9066.jpg',
    },
  },
  {
    code: 'megaton-kyuu-musashi',
    names: {
      ru: 'Мегатон Мусаси',
    },
    description:
      'В будущем Землю атакуют пришельцы, после чего девяносто процентов людей были уничтожены. Оставшиеся в живых обитают в приютах под тотальным контролем, а их память стерта. Однажды трех подростков выбирают для пилотирования робо-машин, которые соединяются в единого Мусаси. Эта операция ставит их жизни под угрозу.\n\n\n\nОбратите внимание: просмотр бесплатный (с рекламой) в официальном плеере. Переключить на 2 серию можно в правом верхнем углу.',
    torrents: {
      series: {
        string: '1-1',
      },
      list: [null, {}],
    },
    poster: {
      url: '/upload/release/350x500/9036.jpg',
    },
  },
  {
    code: 'kimetsu-no-yaiba-mugen-ressha-hen-tv',
    names: {
      ru: 'Клинок, Рассекающий Демонов: Бесконечный Поезд (ТВ)',
    },
    description:
      'Дополненная история фильма.\nНа «Бесконечном поезде» пропадают люди. Подозревая, что это проделки демонов, на поезд отправляют Рэнгоку Кёджиро, Хашира Пламени, а также наших героев - Танджиро, Зэницу и Иноске. Сможет ли новоиспечённый отряд разобраться, какую страшную тайну таит в себе этот поезд?',
    torrents: {
      series: {
        string: '1-6',
      },
      list: [
        null,
        {
          torrent_id: 17682,
        },
      ],
    },
    poster: {
      url: '/upload/release/350x500/9103.jpg',
    },
  },
  {
    code: 'shiroi-suna-no-aquatope',
    names: {
      ru: 'Акватоп белого песка',
    },
    description:
      'Восемнадцатилетняя школьница Кукуру Мисакино, подрабатывающая в океанариуме, однажды встречает Фууку Миязаву — экс-айдола, сбежавшую из Токио.\nПогружаясь в свои мысли и воспоминания, Фуука проводит всё свободное время в океанариуме.\nПока девочки предаются мечтам, борятся с одиночеством, преодолевают препятствия, их дружба становится всё крепче и крепче. А тем временем океанариум оказывается на грани закрытия...',
    torrents: {
      series: {
        string: '1-20',
      },
      list: [
        null,
        {
          torrent_id: 17684,
        },
      ],
    },
    poster: {
      url: '/upload/release/350x500/9031.jpg',
    },
  },
]
export const Side: React.FC = ({}) => {
  return (
    <aside className={s.side}>
      <div className={s.search}>Search</div>
      <div className={s.animes}>
        {animesList.map((el, i) => (
          <AnimeItem
            title={el.names.ru}
            episodes={el.torrents.series.string}
            description={el.description}
            poster={el.poster.url}
            descriptionLength={179}
            code={el.code}
            className={s.animeItem}
            torrent={el.torrents.list[1].torrent_id || false}
            key={`side ${i}:${el.code}`}
          />
        ))}
      </div>
    </aside>
  )
}

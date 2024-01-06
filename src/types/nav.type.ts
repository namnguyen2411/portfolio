import navList from 'src/data/navList'

export type NavType = (typeof navList)[number]
export type NavIdType = (typeof navList)[number]['id']

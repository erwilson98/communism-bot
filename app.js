//app.js

var Twitter = require('twitter');
var config = require('./config.js');
var bot = new Twitter(config); //how we talk to twitter
var stream = bot.stream('user'); //setting up a stream

//chapter 1 of the communist manifesto
var manifesto = `Manifesto of the Communist Party
A spectre is haunting Europe – the spectre of communism. All the powers of old Europe have
entered into a holy alliance to exorcise this spectre: Pope and Tsar, Metternich and Guizot,
French Radicals and German police-spies.
Where is the party in opposition that has not been decried as communistic by its opponents in
power? Where is the opposition that has not hurled back the branding reproach of communism,
against the more advanced opposition parties, as well as against its reactionary adversaries?
Two things result from this fact:
I. Communism is already acknowledged by all European powers to be itself a
power.
II. It is high time that Communists should openly, in the face of the whole world,
publish their views, their aims, their tendencies, and meet this nursery tale of the
Spectre of Communism with a manifesto of the party itself.
To this end, Communists of various nationalities have assembled in London and sketched the
following manifesto, to be published in the English, French, German, Italian, Flemish and Danish
languages.
I. Bourgeois and Proletarians
The history of all hitherto existing society
 is the history of class struggles.
Freeman and slave, patrician and plebeian, lord and serf, guild-master
 and journeyman, in a
word, oppressor and oppressed, stood in constant opposition to one another, carried on an
uninterrupted, now hidden, now open fight, a fight that each time ended, either in a revolutionary
reconstitution of society at large, or in the common ruin of the contending classes.
In the earlier epochs of history, we find almost everywhere a complicated arrangement of society
into various orders, a manifold gradation of social rank. In ancient Rome we have patricians,
knights, plebeians, slaves; in the Middle Ages, feudal lords, vassals, guild-masters, journeymen,
apprentices, serfs; in almost all of these classes, again, subordinate gradations.
The modern bourgeois society that has sprouted from the ruins of feudal society has not done
away with class antagonisms. It has but established new classes, new conditions of oppression,
new forms of struggle in place of the old ones.
Our epoch, the epoch of the bourgeoisie, possesses, however, this distinct feature: it has
simplified class antagonisms. Society as a whole is more and more splitting up into two great
hostile camps, into two great classes directly facing each other – Bourgeoisie and Proletariat.
From the serfs of the Middle Ages sprang the chartered burghers of the earliest towns. From these
burgesses the first elements of the bourgeoisie were developed.
The discovery of America, the rounding of the Cape, opened up fresh ground for the rising
bourgeoisie. The East-Indian and Chinese markets, the colonisation of America, trade with the
colonies, the increase in the means of exchange and in commodities generally, gave to commerce,
to navigation, to industry, an impulse never before known, and thereby, to the revolutionary
element in the tottering feudal society, a rapid development.
The feudal system of industry, in which industrial production was monopolised by closed guilds,
now no longer sufficed for the growing wants of the new markets. The manufacturing system
took its place. The guild-masters were pushed on one side by the manufacturing middle class;
division of labour between the different corporate guilds vanished in the face of division of labour
in each single workshop.
Meantime the markets kept ever growing, the demand ever rising. Even manufacturer no longer
sufficed. Thereupon, steam and machinery revolutionised industrial production. The place of
manufacture was taken by the giant, Modern Industry; the place of the industrial middle class by
industrial millionaires, the leaders of the whole industrial armies, the modern bourgeois.
Modern industry has established the world market, for which the discovery of America paved the
way. This market has given an immense development to commerce, to navigation, to
communication by land. This development has, in its turn, reacted on the extension of industry;
and in proportion as industry, commerce, navigation, railways extended, in the same proportion
the bourgeoisie developed, increased its capital, and pushed into the background every class
handed down from the Middle Ages.
We see, therefore, how the modern bourgeoisie is itself the product of a long course of
development, of a series of revolutions in the modes of production and of exchange.
Each step in the development of the bourgeoisie was accompanied by a corresponding political
advance of that class. An oppressed class under the sway of the feudal nobility, an armed and
self-governing association in the medieval commune*
: here independent urban republic (as in
Italy and Germany); there taxable “third estate” of the monarchy (as in France); afterwards, in the
period of manufacturing proper, serving either the semi-feudal or the absolute monarchy as a
counterpoise against the nobility, and, in fact, cornerstone of the great monarchies in general, the
bourgeoisie has at last, since the establishment of Modern Industry and of the world market,
conquered for itself, in the modern representative State, exclusive political sway. The executive
of the modern state is but a committee for managing the common affairs of the whole
bourgeoisie.
The bourgeoisie, historically, has played a most revolutionary part.
The bourgeoisie, wherever it has got the upper hand, has put an end to all feudal, patriarchal,
idyllic relations. It has pitilessly torn asunder the motley feudal ties that bound man to his
“natural superiors”, and has left remaining no other nexus between man and man than naked selfinterest,
than callous “cash payment”. It has drowned the most heavenly ecstasies of religious fervour, of
chivalrous enthusiasm, of philistine sentimentalism, in the icy water of egotistical
calculation. It has resolved personal worth into exchange value, and in place of the numberless
indefeasible chartered freedoms, has set up that single, unconscionable freedom – Free Trade. In
one word, for exploitation, veiled by religious and political illusions, it has substituted naked,
shameless, direct, brutal exploitation.
The bourgeoisie has stripped of its halo every occupation hitherto honoured and looked up to with
reverent awe. It has converted the physician, the lawyer, the priest, the poet, the man of science,
into its paid wage labourers.
The bourgeoisie has torn away from the family its sentimental veil, and has reduced the family
relation to a mere money relation.
The bourgeoisie has disclosed how it came to pass that the brutal display of vigour in the Middle
Ages, which reactionaries so much admire, found its fitting complement in the most slothful
indolence. It has been the first to show what man’s activity can bring about. It has accomplished
wonders far surpassing Egyptian pyramids, Roman aqueducts, and Gothic cathedrals; it has
conducted expeditions that put in the shade all former Exoduses of nations and crusades.
The bourgeoisie cannot exist without constantly revolutionising the instruments of production,
and thereby the relations of production, and with them the whole relations of society.
Conservation of the old modes of production in unaltered form, was, on the contrary, the first
condition of existence for all earlier industrial classes. Constant revolutionising of production,
uninterrupted disturbance of all social conditions, everlasting uncertainty and agitation
distinguish the bourgeois epoch from all earlier ones. All fixed, fast-frozen relations, with their
train of ancient and venerable prejudices and opinions, are swept away, all new-formed ones
become antiquated before they can ossify. All that is solid melts into air, all that is holy is
profaned, and man is at last compelled to face with sober senses his real conditions of life, and his
relations with his kind.
The need of a constantly expanding market for its products chases the bourgeoisie over the entire
surface of the globe. It must nestle everywhere, settle everywhere, establish connexions
everywhere.
The bourgeoisie has through its exploitation of the world market given a cosmopolitan character
to production and consumption in every country. To the great chagrin of Reactionists, it has
drawn from under the feet of industry the national ground on which it stood. All old-established
national industries have been destroyed or are daily being destroyed. They are dislodged by new
industries, whose introduction becomes a life and death question for all civilised nations, by
industries that no longer work up indigenous raw material, but raw material drawn from the
remotest zones; industries whose products are consumed, not only at home, but in every quarter
of the globe. In place of the old wants, satisfied by the production of the country, we find new
wants, requiring for their satisfaction the products of distant lands and climes. In place of the old
local and national seclusion and self-sufficiency, we have intercourse in every direction, universal
inter-dependence of nations. And as in material, so also in intellectual production. The intellectual
creations of individual nations become common property. National one-sidedness and narrowmindedness
become more and more impossible, and from the numerous national and local
literatures, there arises a world literature.
The bourgeoisie, by the rapid improvement of all instruments of production, by the immensely
facilitated means of communication, draws all, even the most barbarian, nations into civilisation.
The cheap prices of commodities are the heavy artillery with which it batters down all Chinese
walls, with which it forces the barbarians’ intensely obstinate hatred of foreigners to capitulate. It
compels all nations, on pain of extinction, to adopt the bourgeois mode of production; it compels
them to introduce what it calls civilisation into their midst, i.e., to become bourgeois themselves.
In one word, it creates a world after its own image. The bourgeoisie has subjected the country to
the rule of the towns. It has created enormous cities,
has greatly increased the urban population as compared with the rural, and has thus rescued a
considerable part of the population from the idiocy of rural life. Just as it has made the country
dependent on the towns, so it has made barbarian and semi-barbarian countries dependent on the
civilised ones, nations of peasants on nations of bourgeois, the East on the West.
The bourgeoisie keeps more and more doing away with the scattered state of the population, of
the means of production, and of property. It has agglomerated population, centralised the means
of production, and has concentrated property in a few hands. The necessary consequence of this
was political centralisation. Independent, or but loosely connected provinces, with separate
interests, laws, governments, and systems of taxation, became lumped together into one nation,
with one government, one code of laws, one national class-interest, one frontier, and one
customs-tariff.
The bourgeoisie, during its rule of scarce one hundred years, has created more massive and more
colossal productive forces than have all preceding generations together. Subjection of Nature’s
forces to man, machinery, application of chemistry to industry and agriculture, steam-navigation,
railways, electric telegraphs, clearing of whole continents for cultivation, canalisation of rivers,
whole populations conjured out of the ground – what earlier century had even a presentiment that
such productive forces slumbered in the lap of social labour?
We see then: the means of production and of exchange, on whose foundation the bourgeoisie built
itself up, were generated in feudal society. At a certain stage in the development of these means
of production and of exchange, the conditions under which feudal society produced and
exchanged, the feudal organisation of agriculture and manufacturing industry, in one word, the
feudal relations of property became no longer compatible with the already developed productive
forces; they became so many fetters. They had to be burst asunder; they were burst asunder.
Into their place stepped free competition, accompanied by a social and political constitution
adapted in it, and the economic and political sway of the bourgeois class.
A similar movement is going on before our own eyes. Modern bourgeois society, with its
relations of production, of exchange and of property, a society that has conjured up such gigantic
means of production and of exchange, is like the sorcerer who is no longer able to control the
powers of the nether world whom he has called up by his spells. For many a decade past the
history of industry and commerce is but the history of the revolt of modern productive forces
against modern conditions of production, against the property relations that are the conditions for
the existence of the bourgeois and of its rule. It is enough to mention the commercial crises that
by their periodical return put the existence of the entire bourgeois society on its trial, each time
more threateningly. In these crises, a great part not only of the existing products, but also of the
previously created productive forces, are periodically destroyed. In these crises, there breaks out
an epidemic that, in all earlier epochs, would have seemed an absurdity – the epidemic of overproduction.
Society suddenly finds itself put back into a state of momentary barbarism; it appears
as if a famine, a universal war of devastation, had cut off the supply of every means of
subsistence; industry and commerce seem to be destroyed; and why? Because there is too much
civilisation, too much means of subsistence, too much industry, too much commerce. The
productive forces at the disposal of society no longer tend to further the development of the
conditions of bourgeois property; on the contrary, they have become too powerful for these
conditions, by which they are fettered, and so soon as they overcome these fetters, they bring
disorder into the whole of bourgeois society, endanger the existence of bourgeois property. The
conditions of bourgeois society are too narrow to comprise the wealth created by them. And how
does the bourgeoisie get over these crises? On the one hand by enforced destruction of a mass of
productive forces; on the other, by the conquest of new markets, and by the more thorough
exploitation of the old ones. That is to say, by paving the way for more extensive and more
destructive crises, and by diminishing the means whereby crises are prevented. The weapons with which
the bourgeoisie felled feudalism to the ground are now turned against
the bourgeoisie itself.
But not only has the bourgeoisie forged the weapons that bring death to itself; it has also called
into existence the men who are to wield those weapons – the modern working class – the
proletarians.
In proportion as the bourgeoisie, i.e., capital, is developed, in the same proportion is the
proletariat, the modern working class, developed – a class of labourers, who live only so long as
they find work, and who find work only so long as their labour increases capital. These labourers,
who must sell themselves piecemeal, are a commodity, like every other article of commerce, and
are consequently exposed to all the vicissitudes of competition, to all the fluctuations of the
market.
Owing to the extensive use of machinery, and to the division of labour, the work of the
proletarians has lost all individual character, and, consequently, all charm for the workman. He
becomes an appendage of the machine, and it is only the most simple, most monotonous, and
most easily acquired knack, that is required of him. Hence, the cost of production of a workman is
restricted, almost entirely, to the means of subsistence that he requires for maintenance, and for
the propagation of his race. But the price of a commodity, and therefore also of labour, is equal to
its cost of production. In proportion, therefore, as the repulsiveness of the work increases, the
wage decreases. Nay more, in proportion as the use of machinery and division of labour
increases, in the same proportion the burden of toil also increases, whether by prolongation of the
working hours, by the increase of the work exacted in a given time or by increased speed of
machinery, etc.
Modern Industry has converted the little workshop of the patriarchal master into the great factory
of the industrial capitalist. Masses of labourers, crowded into the factory, are organised like
soldiers. As privates of the industrial army they are placed under the command of a perfect
hierarchy of officers and sergeants. Not only are they slaves of the bourgeois class, and of the
bourgeois State; they are daily and hourly enslaved by the machine, by the overlooker, and, above
all, by the individual bourgeois manufacturer himself. The more openly this despotism proclaims
gain to be its end and aim, the more petty, the more hateful and the more embittering it is.
The less the skill and exertion of strength implied in manual labour, in other words, the more
modern industry becomes developed, the more is the labour of men superseded by that of women.
Differences of age and sex have no longer any distinctive social validity for the working class.
All are instruments of labour, more or less expensive to use, according to their age and sex.
No sooner is the exploitation of the labourer by the manufacturer, so far, at an end, that he
receives his wages in cash, than he is set upon by the other portions of the bourgeoisie, the
landlord, the shopkeeper, the pawnbroker, etc.
The lower strata of the middle class – the small tradespeople, shopkeepers, and retired tradesmen
generally, the handicraftsmen and peasants – all these sink gradually into the proletariat, partly
because their diminutive capital does not suffice for the scale on which Modern Industry is
carried on, and is swamped in the competition with the large capitalists, partly because their
specialised skill is rendered worthless by new methods of production. Thus the proletariat is
recruited from all classes of the population.
The proletariat goes through various stages of development. With its birth begins its struggle with
the bourgeoisie. At first the contest is carried on by individual labourers, then by the workpeople
of a factory, then by the operative of one trade, in one locality, against the individual bourgeois
who directly exploits them. They direct their attacks not against the bourgeois conditions of
production, but against the instruments of production themselves; they destroy imported wares
that compete with their labour, they smash to pieces machinery, they set factories ablaze, they
seek to restore by force the vanished status of the workman of the Middle Ages. At this stage, the
labourers still form an incoherent mass scattered over the whole country, and
broken up by their mutual competition. If anywhere they unite to form more compact bodies, this
is not yet the consequence of their own active union, but of the union of the bourgeoisie, which
class, in order to attain its own political ends, is compelled to set the whole proletariat in motion,
and is moreover yet, for a time, able to do so. At this stage, therefore, the proletarians do not fight
their enemies, but the enemies of their enemies, the remnants of absolute monarchy, the
landowners, the non-industrial bourgeois, the petty bourgeois. Thus, the whole historical
movement is concentrated in the hands of the bourgeoisie; every victory so obtained is a victory
for the bourgeoisie.
But with the development of industry, the proletariat not only increases in number; it becomes
concentrated in greater masses, its strength grows, and it feels that strength more. The various
interests and conditions of life within the ranks of the proletariat are more and more equalised, in
proportion as machinery obliterates all distinctions of labour, and nearly everywhere reduces
wages to the same low level. The growing competition among the bourgeois, and the resulting
commercial crises, make the wages of the workers ever more fluctuating. The increasing
improvement of machinery, ever more rapidly developing, makes their livelihood more and more
precarious; the collisions between individual workmen and individual bourgeois take more and
more the character of collisions between two classes. Thereupon, the workers begin to form
combinations (Trades’ Unions) against the bourgeois; they club together in order to keep up the
rate of wages; they found permanent associations in order to make provision beforehand for these
occasional revolts. Here and there, the contest breaks out into riots.
Now and then the workers are victorious, but only for a time. The real fruit of their battles lies,
not in the immediate result, but in the ever expanding union of the workers. This union is helped
on by the improved means of communication that are created by modern industry, and that place
the workers of different localities in contact with one another. It was just this contact that was
needed to centralise the numerous local struggles, all of the same character, into one national
struggle between classes. But every class struggle is a political struggle. And that union, to attain
which the burghers of the Middle Ages, with their miserable highways, required centuries, the
modern proletarian, thanks to railways, achieve in a few years.
This organisation of the proletarians into a class, and, consequently into a political party, is
continually being upset again by the competition between the workers themselves. But it ever
rises up again, stronger, firmer, mightier. It compels legislative recognition of particular interests
of the workers, by taking advantage of the divisions among the bourgeoisie itself. Thus, the tenhours’
bill in England was carried.
Altogether collisions between the classes of the old society further, in many ways, the course of
development of the proletariat. The bourgeoisie finds itself involved in a constant battle. At first
with the aristocracy; later on, with those portions of the bourgeoisie itself, whose interests have
become antagonistic to the progress of industry; at all time with the bourgeoisie of foreign
countries. In all these battles, it sees itself compelled to appeal to the proletariat, to ask for help,
and thus, to drag it into the political arena. The bourgeoisie itself, therefore, supplies the
proletariat with its own elements of political and general education, in other words, it furnishes
the proletariat with weapons for fighting the bourgeoisie.
Further, as we have already seen, entire sections of the ruling class are, by the advance of
industry, precipitated into the proletariat, or are at least threatened in their conditions of existence.
These also supply the proletariat with fresh elements of enlightenment and progress.
Finally, in times when the class struggle nears the decisive hour, the progress of dissolution going
on within the ruling class, in fact within the whole range of old society, assumes such a violent,
glaring character, that a small section of the ruling class cuts itself adrift, and joins the
revolutionary class, the class that holds the future in its hands. Just as, therefore, at an earlier
period, a section of the nobility went over to the bourgeoisie, so now a portion of the bourgeoisie
goes over to the proletariat, and in particular, a portion of the bourgeois ideologists, who have
raised themselves to the level of comprehending theoretically the historical movement as a whole.
Of all the classes that stand face to face with the bourgeoisie today, the proletariat alone is a
really revolutionary class. The other classes decay and finally disappear in the face of Modern
Industry; the proletariat is its special and essential product.
The lower middle class, the small manufacturer, the shopkeeper, the artisan, the peasant, all these
fight against the bourgeoisie, to save from extinction their existence as fractions of the middle
class. They are therefore not revolutionary, but conservative. Nay more, they are reactionary, for
they try to roll back the wheel of history. If by chance, they are revolutionary, they are only so in
view of their impending transfer into the proletariat; they thus defend not their present, but their
future interests, they desert their own standpoint to place themselves at that of the proletariat.
The “dangerous class”, [lumpenproletariat] the social scum, that passively rotting mass thrown
off by the lowest layers of the old society, may, here and there, be swept into the movement by a
proletarian revolution; its conditions of life, however, prepare it far more for the part of a bribed
tool of reactionary intrigue.
In the condition of the proletariat, those of old society at large are already virtually swamped. The
proletarian is without property; his relation to his wife and children has no longer anything in
common with the bourgeois family relations; modern industry labour, modern subjection to
capital, the same in England as in France, in America as in Germany, has stripped him of every
trace of national character. Law, morality, religion, are to him so many bourgeois prejudices,
behind which lurk in ambush just as many bourgeois interests.
All the preceding classes that got the upper hand sought to fortify their already acquired status by
subjecting society at large to their conditions of appropriation. The proletarians cannot become
masters of the productive forces of society, except by abolishing their own previous mode of
appropriation, and thereby also every other previous mode of appropriation. They have nothing of
their own to secure and to fortify; their mission is to destroy all previous securities for, and
insurances of, individual property.
All previous historical movements were movements of minorities, or in the interest of minorities.
The proletarian movement is the self-conscious, independent movement of the immense majority,
in the interest of the immense majority. The proletariat, the lowest stratum of our present society,
cannot stir, cannot raise itself up, without the whole superincumbent strata of official society
being sprung into the air.
Though not in substance, yet in form, the struggle of the proletariat with the bourgeoisie is at first
a national struggle. The proletariat of each country must, of course, first of all settle matters with
its own bourgeoisie.
In depicting the most general phases of the development of the proletariat, we traced the more or
less veiled civil war, raging within existing society, up to the point where that war breaks out into
open revolution, and where the violent overthrow of the bourgeoisie lays the foundation for the
sway of the proletariat.
Hitherto, every form of society has been based, as we have already seen, on the antagonism of
oppressing and oppressed classes. But in order to oppress a class, certain conditions must be
assured to it under which it can, at least, continue its slavish existence. The serf, in the period of
serfdom, raised himself to membership in the commune, just as the petty bourgeois, under the
yoke of the feudal absolutism, managed to develop into a bourgeois. The modern labourer, on the
contrary, instead of rising with the process of industry, sinks deeper and deeper below the
conditions of existence of his own class. He becomes a pauper, and pauperism develops more
rapidly than population and wealth. And here it becomes evident, that the bourgeoisie is unfit any
longer to be the ruling class in society, and to impose its conditions of existence upon society as
an over-riding law. It is unfit to rule because it is incompetent to assure an existence to its slave
within his slavery, because it cannot help letting him sink into such a state, that it has to feed him,
instead of being fed by him. Society can no longer live under this bourgeoisie, in other words, its
existence is no longer compatible with society.
The essential conditions for the existence and for the sway of the bourgeois class is the formation
and augmentation of capital; the condition for capital is wage-labour. Wage-labour rests
exclusively on competition between the labourers. The advance of industry, whose involuntary
promoter is the bourgeoisie, replaces the isolation of the labourers, due to competition, by the
revolutionary combination, due to association. The development of Modern Industry, therefore,
cuts from under its feet the very foundation on which the bourgeoisie produces and appropriates
products. What the bourgeoisie therefore produces, above all, are its own grave-diggers. Its fall
and the victory of the proletariat are equally inevitable. `;
manifesto = manifesto.replace(/(\r\n|\n|\r)/gm, ' ');

stream.on('follow', followed);
stream.on('unfollow', unfollowed);
//stream.on('favorite', favorited);
//stream.on('unfavorite', unfavorited);

//run it when we open the program
runBot();
//run it every 30 minutes
setInterval(runBot, 1000 * 60 * 60);

var params = {
    q: ['#communism', '#communist', '#manifesto', '#marx', '#marxism',
        '#communistmanifesto', '#russia'],
    count: 1,
    result_type: 'recent',
    lang: 'en'
}
//try to find something to favorite
findFav(params);
//do this once a minute so the host doesn't time out
setInterval(findFav, 1000* 60);

function runBot() {
    var len = Math.floor(Math.random() * manifesto.length - 140);
    var sub = manifesto.substring(len, len + 139);
    //console.log(manifesto);

    post(sub);
}

// function findRetweet(params) {
//     bot.get('search/tweets', params, function(err, data, response) {
//         if (!err) {
//             //loop through the tweets we found
//             for(let i = 0; i < data.statuses.length; i++) {
//                 //get their id tag
//                 let id = {id: data.statuses[i].id_str}
//                 bot.post('statuses/retweet', id, function(err, response) {
//                     if (!err) {
//                         let username = response.user.screen_name;
//                         let tweetId = response.id_str;
//                         console.log('Retweeted tweet from ' + username + 'at ID ' + tweetId);
//                         reply('@' + username + ' Haha, so funny!', username);
//                     } else {
//                         console.log(err[0].message);
//                     }
//                 });
//             }
//         } else {
//             console.log(err[0].message);
//         }
//     });
// }

 function findFav(params) {
     bot.get('search/tweets', params, function(err, data, response) {
         if (!err) {
             //loop through the tweets we found
             for(let i = 0; i < data.statuses.length; i++) {
                 //get their id tag
                 let id = {id: data.statuses[i].id_str}
                 bot.post('favorites/create', id, function(err, response) {
                     if (!err) {
                         let username = response.user.screen_name;
                         let tweetId = response.id_str;
                         console.log('Favorited tweet from ' + username + 'at ID ' + tweetId);
                         reply('@' + username + ' I follow back...', username);
                     } else {
                         console.log(err[0].message);
                     }
                 });
             }
         }
     });
 }

function followed(event) {
    console.log('Someone followed the bot! Follow Event is running');
    //get their twitter handle
    var name = event.source.name;
    var screenName = event.source.screen_name;
    //follows them back
    follow(name);
    reply('@' + screenName + ' Danke for the follow, comrade', screenName);
}

function follow(name) {
    bot.post('friendships/create', name, function(err, data, request) {
        if(!err) {
            console.log('Just followed: ' + name);
        } else {
            console.log(err[0].message);
        }
    });
}

function unfollowed(event) {
    console.log('Someone unfollowed the bot!  Unfollow event is running');
    var name = event.source.name;
    var screenName = event.source.screen_name;
    reply('@' + screenName + ' You unfollow bot?  In Russia, bot unfollows you');
    unfollow(name);
}

function unfollow(name) {
    bot.post('friendships/destroy', name, function(err, data, request) {
        if(!err) {
            console.log('Unfollowed ' + name);
        } else {
            console.log(err[0].message);
        }
    })
}

function reply(txt, name) {
    var tweet = {
        status: txt
    }
    bot.post('statuses/update', tweet, function(err, data, response) {
        if(err) {
            console.log(err[0].message);
        }
        else {
            console.log("Just responded to @" + name);
        }
    });
}

function post(txt) {
    var tweet = {
        status: txt
    }
    bot.post('statuses/update', tweet, function(err, data, response) {
        if(err) {
            console.log(err[0].message);
        } else {
            console.log('Just posted some of the manifesto');
        }
    })
}
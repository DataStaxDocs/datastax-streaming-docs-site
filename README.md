# DataStax Streaming Documentation Site

As a line of business at DataStax, streaming represents multiple products. Each product may or may not have versioning. Each may or may not be open sourced. Antora is a great fit for such a dynamic environment and the Streaming docs team utilizes its features extensively.

To continue into Streaming Documentation it is assumed that you have a solid understand of Antora playbooks and how Antora compiles a site. [Start here](https://docs.antora.org/antora/latest/how-antora-works/) if you don't.

Readme Topics:

- [Products that make up the streaming line of business](#products-that-make-up-documentation)
- [Getting Started](#getting-started)
- [Goals of documentation](#goals)
- [Managing redirects](#managing-redirects)

## Products that make up documentation

| Display Name                             | Project Repo                                                                                      | Public | Docs URL Path*                    |
|------------------------------------------|---------------------------------------------------------------------------------------------------|--------|-----------------------------------|
| DataStax Streaming Documentation Site    | [datastaxdocs/datastax-streaming-docs-site](https://github.com/datastaxdocs/datastax-streaming-docs-site) | Y      | /streaming                        |
| DataStax Astra Streaming                 | [datastax/astra-streaming-docs](https://github.com/datastax/astra-streaming-docs)                 | Y      | /streaming/astra-streaming/       |
| DataStax Luna Streaming                  | [datastax/pulsar-docs](https://github.com/datastax/pulsar-docs)                                   | Y      | /streaming/luna-streaming         |
| Starlight for Kafka                      | [datastax/starlight-for-kafka-docs](https://github.com/datastax/starlight-for-kafka-docs)         | Y      | /streaming/starlight-for-kafka    |
| Starlight for RabbitMQ                   | [datastax/starlight-for-rabbitmq-docs](https://github.com/datastax/starlight-for-rabbitmq-docs)   | Y      | /streaming/starlight-for-rabbitmq |
| Starlight for JMS                        | [datastax/starlight-for-jms-docs](https://github.com/datastax/starlight-for-jms-docs)             | Y      | /streaming/starlight-for-jms      |
| DataStax Streaming Leaning Site          | [datastax/streaming-learning-docs](https://github.com/datastax/streaming-learning-docs)           |Y| /learning                         |

*assuming a URL prefix of https://docs.datastax.com/en

#### DataStax Streaming Documentation Site

This is the "parent" site to the entire line of business. There are only 1-2 pages in the entire site, with no formal left navigation. The pages are meant to be highlevel "directional" pages, helping someone understand what products have documentation, their purpose in the world, and a link to that product's index page.

#### DataStax Astra Streaming

Documentation site for the Astra Streaming product.

#### DataStax Luna Streaming

Documentation site for the Luna Streaming product.

#### Starlight for Kafka

Documentation site for the Kafka API in the Starlight suite.

#### Starlight for RabbitMQ

Documentation site for the RabbitMQ API in the Starlight suite.

#### Starlight for JMS

Documentation site for the JMS API in the Starlight suite.

#### DataStax Streaming Leaning Site

A learning site covering topics that span multiple streaming products, or talk about Apache Pulsar concepts.

## Getting started

It is assumed that you have a good understanding of how Antora works. You???ll need that knowledge to understand why things have been arranged in a certain way. The following steps will get your local environment ready to edit and compile the different DataStax streaming documentation areas.

1. Create a local folder that will hold each documentation area
  
    `mkdir datastax-streaming-site`

    `cd datastax-streaming-site`

2. Clone the following repos into that folder (let git name the folders)

   `git clone https://github.com/datastaxdocs/datastax-streaming-docs-site`

   `git clone https://github.com/datastax/astra-streaming-docs`

   `git clone https://github.com/datastax/pulsar-docs`

   `git clone https://github.com/datastax/starlight-for-jms-docs`

   `git clone https://github.com/datastax/starlight-for-kafka-docs`

   `git clone https://github.com/datastax/starlight-for-rabbitmq-docs`

   `git clone https://github.com/datastax/streaming-learning-docs`

3. Install the site dependencies and antora cli

   `cd ./datastax-streaming-docs-site`

   `npm install`

   `npm i --location=global @antora/cli`

   `antora -v`

   `cd ../`

4. Build the site to ensure the local playbook is working properly (you should be in the datastax-streaming-site folder)

   `antora --fetch --clean ./datastax-streaming-docs-site/antora-playbooks/antora-local-playbook.yaml`

5. If built correctly you should have a new ???_build??? folder that holds the compiled streaming documentation site
6. Open the parent "datastax-streaming-site" folder in your editor of choice, it???s not recommended to open each site???s folder individually. Ie: `code ./`

## Goals

### Imperative configurations

The purpose if using Antora is to combine each product's documentation into one complete site. To do so means that configurations should be clearly defined with little interpretation. TO achieve this the team takes an imperative approach. The playbooks are the source of truth. The command to build the site is simplistic by design. It is not reccomended to override playbook settings with command line options.

### Treat each product as domain of knowledge

Each product is considered a domain of knowledge about the functions it can run. The documentation follows that same philosophy. Global attributes should be thoughful and -actually- be needed throughout the different sites. Otherwise, local attributes (located in that site's antora.yml) should always be the default.

### No loose ends

Search engines don't like it when they index a page and then it is removed. Uses like it even less. When a page makes it to production, that path is forever taken. Either by an actual page as the canonical path or as a redirect to a canonical page. Make all possible efforts to never redirect to generic pages. Users get frustrated when they think they are being taken to a page talking about -this this feature- but are actually given a page talking about -a bunch of generic stuff this does-.

## Managing redirects

DataStax documentation site is running on an [Apache HTTP server](https://httpd.apache.org/). It has a [certain spec](https://httpd.apache.org/docs/current/rewrite/remapping.html) for creating redirects when a page is moved or removed. Antora has provisions to write a redirect file upon building the site that follows this spec. [Read more here](https://docs.antora.org/antora/latest/playbook/urls-redirect-facility/#httpd).

The streaming site uses [Antora's page-aliases](https://docs.antora.org/antora/latest/page/page-aliases/) explicitly to represent a redirection of some kind. In turn a properly formatted .htaccess file is created and given to the server un startup. Read more about htaccess files [here](https://httpd.apache.org/docs/current/howto/htaccess.html).
